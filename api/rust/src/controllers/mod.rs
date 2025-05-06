use axum::Json;
use hyper::StatusCode;
use serde::Serialize;

#[derive(serde::Deserialize, Debug, Serialize)]
pub struct InfoCurso{
    pub nome_curso: String,
    pub sigla_curso: String,
    pub quantidade_semestres: String,
}

#[derive(serde::Deserialize, Debug, Serialize)]
pub struct InfoCampus{
    pub nome_campus: String,
    pub cidade_campus: String,
    pub uf_campus: String,
}

#[derive(serde::Deserialize, Debug, Serialize)]
pub struct InfoInput{
    pub info_curso: InfoCurso,
    pub info_campus: InfoCampus
}

pub async fn api_atualizar_documento(input: Json<InfoInput>)
    -> Result<(StatusCode, Json<String>), (StatusCode, Json<String>)>{

    let nome_curso = input.info_curso.nome_curso.trim();
    let ano_documento = input.info_curso.ano_documento.to_string();

    let info_curso = InfoCurso {
        nome_curso: nome_curso.to_string(),
        ano_documento,
    };

    let info_campus = InfoCampus {
        nome_campus: input.info_campus.nome_campus.trim().to_string(),
        cidade_campus: input.info_campus.cidade_campus.trim().to_string(),
    };

    let argumentos = Argumentos {
        info_curso,
        info_campus,
    };

    let argumentos = serde_json::json!(argumentos);

    let _ = std::fs::write("argumentos.json", argumentos.to_string());

    let conteudo = format!("typst compile --input argumentos.json main.typ --format pdf");
    std::fs::write("script.bat", conteudo).unwrap();

    use std::process::Command;

    Command::new("cmd")
    .args(&["/C", "script.bat"])
    .output()
    .expect("failed to execute process");

    return Ok((StatusCode::OK, Json("Documento atualizado com sucesso.".to_string())));
}