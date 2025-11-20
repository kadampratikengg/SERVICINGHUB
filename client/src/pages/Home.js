import React, { useEffect, useRef, useState } from "react";
import Services from "./Services"; // keep Services rendering below

const projectsList = [
  { img: "https://picsum.photos/600/400?random=101", name: "AWS Cloud Migration" },
  { img: "https://picsum.photos/600/400?random=102", name: "DevOps CI/CD Setup" },
  { img: "https://picsum.photos/600/400?random=103", name: "React Corporate Website" },
  { img: "https://picsum.photos/600/400?random=104", name: "Kubernetes Deployment" },
  { img: "https://picsum.photos/600/400?random=105", name: "E-commerce Platform" },
  { img: "https://picsum.photos/600/400?random=106", name: "CCTV Office Installation" },
  { img: "https://picsum.photos/600/400?random=107", name: "Laptop & IT Infra Setup" },
  { img: "https://picsum.photos/600/400?random=108", name: "Cloudflare Security Setup" },
  { img: "https://picsum.photos/600/400?random=109", name: "Zoho Mail + CRM Setup" },
  { img: "https://picsum.photos/600/400?random=110", name: "Azure Active Directory Setup" }
];

const Home = () => {
  const rowRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(4); // default desktop view
  const [index, setIndex] = useState(0);

  // responsive visibleCount
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 576) setVisibleCount(1);
      else if (w < 768) setVisibleCount(2);
      else if (w < 992) setVisibleCount(3);
      else setVisibleCount(4);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // auto-rotate logic: update index periodically
  useEffect(() => {
    const total = projectsList.length;
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % total);
    }, 3000); // rotate every 3s
    return () => clearInterval(id);
  }, []);

  // when index or visibleCount changes, scroll to position
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    // compute item width based on visibleCount
    const itemWidth = row.clientWidth / visibleCount;
    // clamp index so we never scroll past last full "page"
    const maxStart = Math.max(0, projectsList.length - visibleCount);
    const startIndex = Math.min(index, maxStart);

    row.scrollTo({
      left: startIndex * itemWidth,
      behavior: "smooth"
    });
  }, [index, visibleCount]);

  return (
    <main>

      {/* HERO (kept same as before) */}
      <section
        className="hero p-0 m-0 w-100"
        style={{ overflow: "hidden" }}
      >
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">

            <div
              className="carousel-item active"
              style={{
                backgroundImage: "url('https://picsum.photos/1920/1080?random=1')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
                height: "100vh",
              }}
            >
              <div className="carousel-container d-flex flex-column justify-content-center align-items-center text-center h-100">
                <h2 className="text-white fw-bold mb-3">Welcome to ServicingHub</h2>
                <p className="text-white">IT, Cloud & Electronics Expert Services</p>
              </div>
            </div>

            <div
              className="carousel-item"
              style={{
                backgroundImage: "url('https://picsum.photos/1920/1080?random=2')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
                height: "100vh",
              }}
            >
              <div className="carousel-container d-flex flex-column justify-content-center align-items-center text-center h-100">
                <h2 className="text-white fw-bold mb-3">Cloud & DevOps</h2>
                <p className="text-white">AWS | Azure | GCP | Kubernetes | CI/CD | Docker</p>
              </div>
            </div>

            <div
              className="carousel-item"
              style={{
                backgroundImage: "url('https://picsum.photos/1920/1080?random=3')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
                height: "100vh",
              }}
            >
              <div className="carousel-container d-flex flex-column justify-content-center align-items-center text-center h-100">
                <h2 className="text-white fw-bold mb-3">Electronics Solutions</h2>
                <p className="text-white">Full servicing under K Electronics</p>
              </div>
            </div>

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* Projects - single row, 4 visible, auto-rotate */}
      <section className="section text-center mb-5">
        <div className="container">
          <h2 className="mb-4">Our Recent Projects</h2>

          <div className="project-row-wrapper">
            <div
              className="project-row"
              id="projectRow"
              ref={rowRef}
              // keep keyboard focusable for accessibility
              tabIndex={0}
            >
              {projectsList.map((project, idx) => {
                // each item's width is computed in CSS using flex-basis,
                // but we also set inline style to ensure exact visibility count
                const style = { flex: `0 0 ${100 / visibleCount}%`, maxWidth: `${100 / visibleCount}%` };
                return (
                  <div key={idx} className="project-item" style={style}>
                    <img src={project.img} alt={project.name} />
                    <h5>{project.name}</h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section mb-5">
        <div className="container">
          <div className="row align-items-center gy-4">

            <div className="col-lg-6 mb-4">
              <img
                src="https://picsum.photos/600/500?random=20"
                className="img-fluid rounded"
                alt=""
              />
            </div>

            <div className="col-lg-6 mb-4">
              <h2 className="mb-3">Modern IT Infrastructure</h2>
              <p className="mb-3">
                We provide scalable and secure cloud and DevOps solutions with end-to-end deployment automation.
              </p>

              <ul className="list-unstyled">
                <li className="mb-2">✓ Cloud Migration</li>
                <li className="mb-2">✓ Kubernetes & Docker Setup</li>
                <li className="mb-2">✓ CI/CD Pipelines</li>
                <li className="mb-2">✓ Monitoring & DevOps Support</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="section light-background mb-5">
        <div className="container text-center">
          <div className="section-title">
            <h2>About Us</h2>
            <p>Who We Are</p>
          </div>
          <p className="mb-3">
            ServicingHub offers end-to-end technology & electronics solutions across India.
          </p>
        </div>
      </section>

      {/* Full services */}
      <Services />

    </main>
  );
};

export default Home;
