export function BlogUnavailable() {
  return (
    <div className="border-t border-border py-10 font-sans">
      <h1 className="text-3xl font-semibold text-foreground">Blog is temporarily unavailable.</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
        Hashnode API access now requires the publication to be on Pro. Set `HASHNODE_PUBLICATION_HOST` and point
        `HASHNODE_GQL_ENDPOINT` to `https://gql-beta.hashnode.com` in the deployment environment.
      </p>
    </div>
  );
}
