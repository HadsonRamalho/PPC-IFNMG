#set page(fill: color.rgb("2e9e40"));

#let json = json("/api/rust/argumentos.json")

#let curso = json.at("info_curso").at("nome_curso");
#let campus = json.at("info_campus").at("nome_campus");

#let imagem_aracuai = image("foto_aracuai.jpg", height: 180pt);

#let imagem_brasao = box(figure(
  image("brasao-da-republica.jpg", 
  width: 60pt, height: 60pt)
  )
);

#let imagem_ifnmg = box(figure(
  image("ifnmg_vertical.jpg",
  width: 60pt, height: 60pt)
  )
);

#let texto_header = box(
  align(center, 
  text(
    upper(
      text("Ministério da Educação")
      + v(5pt, weak: true) 
      + text("Secretaria de Educação Profissional e Tecnológica")
      + v(5pt, weak: true) 
      + text("Instituto Federal do Norte de Minas Gerais")
      + v(5pt, weak: true) 
      + text(campus, style: "italic")
    ),
    fill: white,
  ))
);

#let curva1 = curve(
  stroke: 2pt + white,
  curve.move((60pt, 60pt)),
  curve.quad((60pt, 1pt), (10pt, 0pt)),
);

#let linha1 = line(
  start: (0%, 0pt), 
  stroke: 2pt + white,
  end: (105%, 0pt)
);

#let linha2 = line(
  start: (60pt, 580pt), 
  stroke: 2pt + white,
  end: (60pt, 0pt)
);

#let conteudo1 = text(
  text("Projeto Pedagógico do " + curso), 
  fill: white, 
  size: 20pt, 
  weight: "bold",
);


#let curva_final_1 = grid(
  align: center, 
  move(linha1, dy: -15pt), 
  move(curva1, dy: -15pt), 
  rect(box(
    align(center, box(imagem_aracuai + conteudo1))
  ),
  width: 300pt, stroke: none),
  move(linha2, dy: -15pt), 
  columns: 2, 
  rows: 1,
);


#let curva1 = curve(
  stroke: 2pt + white,
  curve.move((60pt, 60pt)),
  curve.quad((1pt, 60pt), (0pt, 0pt)),
);

#let linha2 = line(
  start: (60pt, 580pt), 
  stroke: 2pt + white,
  end: (60pt, 0pt)
);

#let curva_final_2 = grid(align: center, 
  move(curva1, dy: 600pt), 
  move(linha1, dy: 660pt), 
  move(linha2, dy: -40pt, dx: -60pt), 
  columns: 2, 
  rows: 1,
);

#let grid_header = grid(columns: 3, rows: 2, inset: 5pt,
  imagem_brasao,
  move(texto_header, dy: 10pt),
  imagem_ifnmg
);

#let grupo1 = move(curva_final_1, dy: -50pt, dx: 25pt)
#let grupo1 = grupo1 + move(curva_final_2, dy: -690pt, dx: -20pt);

#let grupo1 = grupo1 + move(text("Turmas ingressantes a partir de: 01/2023"), dy: -920pt)
#let grupo1 = grupo1 + move(text("\nTurmas migrantes para este projeto: 01/2016, 01/2017, 01/2018, 01/2019, 01/2020, 01/2021 e 01/2022"), dy: -950pt)

#let grupo1 = text(grupo1, fill: white, size: 14pt)

#let ano_documento = text("2023");

#let texto_footer = text(campus + " - MG") + text("\n" + ano_documento);
#let texto_footer = text(texto_footer, fill: white, size: 14pt);

#let tabela = table(
  columns: 2, 
  align: left, 
  table.header(text("Resolução de Implantação", fill: white), text("Portaria Reitor Nº 0848/2015", fill: white)
  ),
 text("Resolução de Reestruturação", fill: white),
 text("Resolução CEPE nº42 de 26 de abril de 2023", fill: white),
 stroke: white,
  inset: 10pt
);

#let grupo1 = grupo1 + move(tabela, dy: -895pt) + align(center, move(texto_footer, dy: -890pt));
#let grupo1 = move(grid_header, dy: -50pt) + grupo1;
#box(grupo1)

#set page(fill: white);

+ = Apresentação
  + + == Apresetanção Geral
O Projeto Pedagógico do Curso #curso objetiva atender os anseios das suas regiões de abrangência. A construção deste PPC pautou-se na legislação vigente, no Plano de Desenvolvimento Institucional (PDI), nos regulamentos do IFNMG e nos princípios democráticos, contando com a participação dos professores do curso, da equipe pedagógica, dos demais profissionais envolvidos e da comunidade. A proposta aqui apresentada tem por finalidade retratar a realidade vivenciada pelo #campus quanto à atualização, adequação curricular, realidade cultural e social, buscando garantir o interesse, os anseios e a qualificação da clientela atendida, despertando o interesse para o ensino, a pesquisa e a extensão e ainda, a verticalização dos estudos.