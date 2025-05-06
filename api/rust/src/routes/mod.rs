use axum::{
    body::Body, http::Method, middleware, routing::{get, get_service, patch, post}, Router
};
use tower_http::cors::{Any, CorsLayer};
use tower_http::services::ServeDir;

use crate::controllers::api_atualizar_documento;

pub fn cria_rotas() -> Router<>{
    let app: Router<_> = Router::new()
    .route("/atualizar_documento", patch(api_atualizar_documento))
   
    .layer(
        CorsLayer::new()
            .allow_origin(Any)
            .allow_methods(vec![Method::POST, Method::PUT, Method::PATCH, Method::DELETE, Method::GET]) 
            .allow_headers(Any),
    );

    let app = Router::new()
        .nest("/api", app);
    app
}