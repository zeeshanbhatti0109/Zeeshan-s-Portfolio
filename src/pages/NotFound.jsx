import SEO from "../components/SEO";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" description="The page you're looking for doesn't exist." />
      <div className="container not-found">
        <p className="not-found__code">404</p>
        <h1 className="not-found__heading">This page doesn't exist.</h1>
        <p className="not-found__text">
          The page you're looking for may have moved or never existed. Head
          back to the homepage or take a look at recent work instead.
        </p>
        <div className="not-found__actions">
          <Button to="/" variant="primary">Back to home</Button>
        </div>
      </div>
    </>
  );
}
