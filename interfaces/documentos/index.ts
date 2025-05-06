export interface InfoCurso{
    nome_curso: string,
    sigla_curso: string,
    quantidade_semestres: string,
};

export interface InfoCampus{
    nome_campus: string,
    uf_campus: string,
    cidade_campus: string,
}

export interface InfoDocumento{
    info_campus: InfoCampus,
    info_curso: InfoCurso,
};