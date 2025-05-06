pub mod routes;
pub mod controllers;

#[tokio::main]
async fn main(){
    let mut nome_curso = String::new();

    tracing_subscriber::fmt::init();
    let app = crate::routes::cria_rotas();
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3033").await.unwrap();
    axum::serve(listener, app).await.unwrap();    

}