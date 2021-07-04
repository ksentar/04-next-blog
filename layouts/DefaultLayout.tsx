import { FC } from "react";
import { Card } from "../components/album/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { cards } from "../data/cards";
import { Header } from "../components/album/Header";
export const DefaultLayout: FC = (props) => {
  return (
    <div>
      <>
        <Header />
        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Album example</h1>
                <p className="lead text-muted">
                  Something short and leading about the collection below—its
                  contents, the creator, etc. Make it short and sweet, but not
                  too short so folks don’t simply skip over it entirely.
                </p>
                <p>
                  <a href="#" className="btn btn-primary my-2">
                    Main call to action
                  </a>
                  <a href="#" className="btn btn-secondary my-2">
                    Secondary action
                  </a>
                </p>
              </div>
            </div>
          </section>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {cards.map((v) => {
                  return (
                    <div className="col">
                      <Card {...v} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
        <footer className="text-muted py-5">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#">Back to top</a>
            </p>
            <p className="mb-1">
              Album example is © Bootstrap, but please download and customize it
              for yourself!
            </p>
            <p className="mb-0">
              New to Bootstrap? <a href="/">Visit the homepage</a> or read our{" "}
              <a href="/docs/5.0/getting-started/introduction/">
                getting started guide
              </a>
              .
            </p>
          </div>
        </footer>
      </>
    </div>
  );
};
