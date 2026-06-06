const defaultEndpoint = "https://gql-beta.hashnode.com";
const defaultPostCount = 12;

const postsQuery = `
  query KajiBlogPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      title
      url
      posts(first: $first) {
        edges {
          node {
            id
            title
            brief
            slug
            url
            publishedAt
            readTimeInMinutes
          }
        }
      }
    }
  }
`;

const postQuery = `
  query KajiBlogPost($host: String!, $slug: String!) {
    publication(host: $host) {
      title
      url
      post(slug: $slug) {
        id
        title
        brief
        slug
        url
        publishedAt
        updatedAt
        readTimeInMinutes
        content {
          html
        }
      }
    }
  }
`;

export type HashnodePostSummary = {
  id: string;
  title: string;
  brief: string;
  slug: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
};

export type HashnodePost = HashnodePostSummary & {
  updatedAt: string;
  content: { html: string };
};

type GraphQlResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};

type PublicationPostsResponse = {
  publication: {
    title: string;
    url: string;
    posts: { edges: { node: HashnodePostSummary }[] };
  } | null;
};

type PublicationPostResponse = {
  publication: {
    title: string;
    url: string;
    post: HashnodePost | null;
  } | null;
};

function publicationHost() {
  const host = process.env.HASHNODE_PUBLICATION_HOST;

  if (!host) {
    throw new Error("HASHNODE_PUBLICATION_HOST is not configured.");
  }

  return host;
}

function requestHeaders() {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const authorization = process.env.HASHNODE_AUTHORIZATION;
  const token = process.env.HASHNODE_TOKEN;

  if (authorization) {
    headers.Authorization = authorization;
    return headers;
  }

  if (token) {
    headers.Authorization = token.startsWith("Bearer ") ? token : `Bearer ${token}`;
  }

  return headers;
}

async function hashnodeRequest<T>(query: string, variables: Record<string, unknown>) {
  const response = await fetch(process.env.HASHNODE_GQL_ENDPOINT ?? defaultEndpoint, {
    method: "POST",
    headers: requestHeaders(),
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 1800 },
  });

  if (!response.ok) {
    throw new Error(`Hashnode request failed with ${response.status}`);
  }

  const payload = (await response.json()) as GraphQlResponse<T>;

  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join("; "));
  }

  if (!payload.data) {
    throw new Error("Hashnode returned no data.");
  }

  return payload.data;
}

export async function getBlogPosts(count = defaultPostCount) {
  const data = await hashnodeRequest<PublicationPostsResponse>(postsQuery, {
    host: publicationHost(),
    first: count,
  });

  return data.publication?.posts.edges.map((edge) => edge.node) ?? [];
}

export async function getBlogPost(slug: string) {
  const data = await hashnodeRequest<PublicationPostResponse>(postQuery, {
    host: publicationHost(),
    slug,
  });

  return data.publication?.post ?? null;
}

export async function getBlogPostsSafe(count = defaultPostCount) {
  try {
    return await getBlogPosts(count);
  } catch {
    return [];
  }
}
