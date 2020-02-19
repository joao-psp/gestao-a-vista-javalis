import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Okrable } from '@app/shared/models/okrable.model';
import { Tribo } from '@app/shared/models/tribo.model';
import { Objetivo } from '@app/shared/models/objetivo.model';
import { ResultadoChave } from '@app/shared/models/resultado-chave.model';
import { Cliente } from '@app/shared/models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class OkrsService {
  private okrables: Okrable[] = [
    new Tribo('Suricatos', [
      new Objetivo('Melhorar a relação de confiança com o cliente', [
        new ResultadoChave(
          '100% dos SQUADs atuando pelo menos 1 dia da sprint com o cliente',
          0.87
        )
      ]),
      new Objetivo('Melhorar a percepção de relevância dos produtos', [
        new ResultadoChave(
          'Realizar análise de indicadores do produto e do negócio de 100% dos SQUADs através de uma ferramenta de Analytics',
          0.9
        )
      ]),
      new Objetivo('Aumentar a visibilidade e participação da tribo na dti', [
        new ResultadoChave(
          'Conquistar a certificação de parceiro Microsoft para a prestação de serviços em Power BI',
          0.2
        ),
        new ResultadoChave(
          'Realizar pelo menos 6 eventos para compartilhar o conhecimento da tribo com a DTI',
          0.5
        ),
        new ResultadoChave(
          'Realizar pelo menos 1 post por SQUAD nas redes sociais da DTI (Divulgação de cases, blogposts)',
          0.33
        )
      ]),
      new Objetivo('Melhorar a usabilidade e experiência do usuário', [
        new ResultadoChave(
          'Concluir pelo menos 1 ciclo de melhoria de usabilidade e experiência do usuário em cada SQUAD',
          0.66
        )
      ])
    ]),
    new Cliente(1, 'Falconi', 'falconi', [
      new Objetivo('Disseminar a cultura ágil na Falconi', [
        new ResultadoChave(
          'Realizar pelo menos 3 eventos de compartilhamento de conhecimento na Falconi (Palestra, Workshop, Apresentação de Case e Lançamento de Produto)',
          0.66
        ),
        new ResultadoChave(
          'Gravar e divulgar 1 podcast com a diretoria da Falconi',
          1
        )
      ]),
      new Objetivo('Aumentar o conhecimento do negócio da Falconi', [
        new ResultadoChave(
          '100% dos integrantes concluindo os cursos de GPD e Solução de Problemas da Academia Falconi',
          0.4
        ),
        new ResultadoChave(
          'Realizar 1 tech shot aberto ao público sobre PDCA Ágil (Marina Cavalieri)',
          0
        )
      ]),
      new Objetivo('Aumentar o conhecimento dos times', [
        new ResultadoChave(
          'Pelo menos 1 integrante de cada SQUAD participando de 1 sprint em outro SQUAD',
          1
        ),
        new ResultadoChave('Realizar KT mensal de DevOps', 0.67)
      ])
    ]),
    new Cliente(2, 'Vale', 'vale', [
      new Objetivo(
        'Ser o fornecedor de referência para soluções de tecnologia',
        [
          new ResultadoChave(
            'Conceber e apresentar pelo menos 1 solução que agregue valor para o negócio',
            1
          ),
          new ResultadoChave(
            'Realizar pelo menos 3 eventos de compartilhamento de conhecimento na Vale (Palestra, Workshop, Apresentação de Case e Lançamento de Produto)',
            0.33
          ),
          new ResultadoChave('Realizar pelo menos 1 Mission Command', 0)
        ]
      ),
      new Objetivo('Aumentar o conhecimento do negócio de mineração', [
        new ResultadoChave(
          'Pelo menos 1 integrante de cada SQUAD realizando visita guiada em porto, mina e ferrovia',
          0
        ),
        new ResultadoChave(
          'Pelo menos 1 integrante de cada SQUAD concluindo o curso de mineração da Universidade Corporativa da Vale',
          0.33
        )
      ])
    ])
  ];

  constructor() {}

  public listarOkrables(): Observable<Okrable[]> {
    return of(this.okrables);
  }
}
