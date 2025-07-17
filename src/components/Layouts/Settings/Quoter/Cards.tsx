import React from 'react';
import { useTranslation } from 'react-i18next';
import { showInfoToast } from '../../../../utils/ToastUtils/toastUtils';

interface cardElement {
  id: number;
  title: string;
  image: string;
  description: string;
  previewLink: string;
  tag: string;
}
interface QuoterCardsProps {
  products: cardElement[];
  quoterType: number;
  setQuoterType(e: any): void;
}

const QuoterCards: React.FC<QuoterCardsProps> = ({ products, quoterType, setQuoterType }) => {
  const { t } = useTranslation();

  return (
    <div className="mx-5">
      <div className="container py-4 position-relative">
        <div id="productsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {Array(Math.ceil(products.length / 2)).fill(0).map((_, groupIndex) => (
              <div key={`group-${groupIndex}`} className={`carousel-item ${groupIndex === 0 ? 'active' : ''}`}>
                <div className="row g-4">
                  {products.slice(groupIndex * 2, groupIndex * 2 + 2).map(product => (
                    <div key={product.id} className="col-md-6">
                      <div className={`card h-100 shadow-sm ${quoterType === product.id ? "border-primary border-3 borderSelectedQuoter" : ""}`}>
                        <div className="position-relative">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="card-img-top"
                            style={{ height: "300px", objectFit: "cover" }}
                          />
                        </div>

                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title fw-bold text-truncate mb-0">{product.title}</h5>

                          <div className="text-muted fs-5">{product.description}</div>

                          <div className="mt-auto d-flex justify-content-end gap-2">
                            <button className="btn btn-outline-primary" onClick={() => {
                                showInfoToast("Recuerda guardar la configuración para previsualizar el cotizador seleccionado")
                                setQuoterType(product.id)
                              }}>
                              {t("quoter.select")}
                            </button>

                            {
                              quoterType === product.id &&
                              <a href={product.previewLink} target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-primary">
                                  {t("quoter.card.preview")}
                                </button>
                              </a>
                            }

                          </div>

                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="carousel-indicators" style={{ position: "static", marginTop: "15px" }}>
            {Array(Math.ceil(products.length / 2)).fill(0).map((_, index) => (
              <button key={index} type="button" data-bs-target="#productsCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-label={`Slide ${index + 1}`}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: index === 0 ? "#555" : "#ccc",
                  margin: "0 6px"
                }}
              />
            ))}
          </div>
        </div>

        {/* Flechas */}
        <button className="carousel-control-prev" type="button" data-bs-target="#productsCarousel" data-bs-slide="prev" style={{ filter: "invert(80%)", left: "-50px", width: "40px" }} >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productsCarousel" data-bs-slide="next" style={{ filter: "invert(80%)", right: "-50px", width: "40px" }} >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default QuoterCards;