import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Squad } from '@app/shared/models/squad.model';
import { Colaborador } from '@app/shared/models/colaborador.model';
import { Tecnologia } from '@app/shared/models/tecnologia.model';
import { Rito } from '@app/shared/models/rito.model';
import { PlanoDeAcoes } from '@app/shared/models/plano-de-acoes.model';
import { GoogleSpreadsheetsService } from '@app/shared/services/google-spreadsheets.service';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import { Burndown } from '@app/shared/models/burndown.model';
import { Tribo } from '@app/shared/models/tribo.model';
import { Helper } from '@app/shared/utils/helper';
import { Cliente } from '@app/shared/models/cliente.model';
import { SquadApoio } from '@app/shared/models/squad-apoio.model';
import { Vaga } from '@app/shared/models/vaga.model';

@Injectable()
export class SquadsService {
  private squads: Squad[] = [
    new Squad(
      1,
      'LiveOn',
      new Cliente(1, 'FCA'),
      new Tribo('Suricatos', null),
      [
        new Colaborador(0, 'Ana Flávia', 'dev'),
        new Colaborador(14, 'Giovanna', 'dev')
      ],
      [
        new Tecnologia('Android', 'android'),
        new Tecnologia('Kotlin', 'kotlin'),
        new Tecnologia('Swift', 'swift'),
        new Tecnologia('iOS', 'ios')
      ],
      ''
    ),
    new Squad(
      2,
      'FCA Press',
      new Cliente(1, 'FCA'),
      new Tribo('Suricatos', null),
      [
        new Colaborador(26, 'Victor', 'dev'),
        new Colaborador(21, 'Maria', 'dev'),
        new Colaborador(12, 'Gabriel Meireles', 'dev')
      ],
      [
        new Tecnologia('React', 'react'),
        new Tecnologia('Java', 'java'),
        new Tecnologia('Spring Boot', 'springboot')
      ],
      ''
    ),
    new Squad(
      3,
      'Easy Tracking',
      new Cliente(1, 'FCA'),
      new Tribo('Suricatos', null),
      [
        new Colaborador(25, 'Vinicius', 'dev'),
        new Colaborador(8, 'Marcos', 'dev'),
        new Colaborador(16, 'Isabella', 'dev')
      ],
      [
        new Tecnologia('React', 'react'),
        new Tecnologia('Java', 'java'),
        new Tecnologia('Spring Boot', 'springboot')
      ],
      ''
    ),
    new Squad(
      4,
      'iJeep',
      new Cliente(1, 'FCA'),
      new Tribo('Suricatos', null),
      [
        new Colaborador(17, 'João Pedro', 'dev'),
        new Colaborador(0, 'Pedro Menezes', 'dev'),
        new Colaborador(0, 'Raphael', 'dev'),
        new Colaborador(0, 'Caroline', 'dev'),
        new Colaborador(0, 'Isabela Azevedo', 'mkt')
      ],
      [
        new Tecnologia('Swift', 'swift'),
        new Tecnologia('iOS', 'ios'),
        new Tecnologia('Java', 'java'),
        new Tecnologia('Spring Boot', 'springboot')
      ],
      ''
    ),
    new Squad(
      5,
      'Jeep Nation - JeepDroid',
      new Cliente(1, 'FCA'),
      new Tribo('Suricatos', null),
      [
        new Colaborador(0, 'Daniel', 'dev'),
        new Colaborador(0, 'Heron', 'dev'),
        new Colaborador(0, 'Caroline', 'dev'),
        new Colaborador(0, 'Pedro Blanc', 'dev'),
        new Colaborador(0, 'Isabela Azevedo', 'mkt')
      ],
      [
        new Tecnologia('Android', 'android'),
        new Tecnologia('Kotlin', 'kotlin'),
        new Tecnologia('Java', 'java'),
        new Tecnologia('Spring Boot', 'springboot')
      ],
      ''
    ),
    new Squad(
      6,
      'Comercial',
      new Cliente(1, 'FCA'),
      new Tribo('Suricatos', null),
      [
        new Colaborador(13, 'Gabriel Pires', 'dev'),
        new Colaborador(8, 'Marcos', 'dev'),
        new Colaborador(2, 'Alexandre Brina', 'dev'),
        new Colaborador(0, 'Bruno', 'dev'),
        new Colaborador(0, 'Enock', 'dev')
      ],
      [
        new Tecnologia('Visual Basic .NET', '0'),
        new Tecnologia('SQL DB', '0'),
        new Tecnologia('Sybase', '0')
      ],
      ''
    ),
    new Squad(
      7,
      'Barramento',
      new Cliente(1, 'FCA'),
      new Tribo('Suricatos', null),
      [
        new Colaborador(11, 'Francisco', 'dev'),
        new Colaborador(5, 'Camila', 'dev'),
        new Colaborador(7, 'Charles', 'dev')
      ],
      [
        new Tecnologia('Visual Basic .NET', '0'),
        new Tecnologia('SQL DB', '0'),
        new Tecnologia('Sybase', '0')
      ],
      ''
    ),
    new Squad(
      8,
      'Carro Conectado',
      new Cliente(1, 'FCA'),
      new Tribo('Suricatos', null),
      [new Colaborador(1, 'Allan', 'dev'), new Colaborador(4, 'Bruno', 'dev')],
      [
        new Tecnologia('Visual Basic .NET', '0'),
        new Tecnologia('SQL DB', '0'),
        new Tecnologia('Sybase', '0')
      ],
      ''
    ),
    new Squad(
      9,
      'Banco Fidis',
      new Cliente(2, 'Banco Fidis'),
      new Tribo('Suricatos', null),
      [
        new Colaborador(0, 'Pedro Blanc', 'dev'),
        new Colaborador(24, 'Raquel', 'dev'),
        new Colaborador(15, 'Guilherme', 'dev'),
        new Colaborador(0, 'Enock', 'dev')
      ],
      [
        new Tecnologia('Java', '0'),
        new Tecnologia('Spring Boot', '0'),
        new Tecnologia('Kotlin', '0'),
        new Tecnologia('Swift', '0'),
        new Tecnologia('Sybase', '0')
      ],
      ''
    ),
    new Squad(
      10,
      'Transf. Digital',
      new Cliente(3, 'O Tempo'),
      new Tribo('Suricatos', null),
      [
        new Colaborador(9, 'Diego', 'dev'),
        new Colaborador(10, 'Estevão', 'dev'),
        new Colaborador(3, 'Allyson', 'dev'),
        new Colaborador(20, 'Marcus', 'dev'),
        new Colaborador(6, 'Iana', 'dev')
      ],
      [
        new Tecnologia('Java', '0'),
        new Tecnologia('Spring Boot', '0'),
        new Tecnologia('Kotlin', '0'),
        new Tecnologia('Swift', '0'),
        new Tecnologia('Sybase', '0')
      ],
      ''
    )
  ];

  private squadApoio: SquadApoio = new SquadApoio(
    'Cross',
    [
      new Colaborador(22, 'Matheus', 'dev'),
      new Colaborador(0, 'Bruna', 'rh'),
      new Colaborador(0, 'Eduardo', 'mkt'),
      new Colaborador(18, 'Lud', 'gc'),
      new Colaborador(0, 'Túlio', 'mkt')
    ],
    [
      new Cliente(1, 'FCA', '0', [], 8, 25, []),
      new Cliente(2, 'Banco Fidis', '0', [], 1, 3, []),
      new Cliente(3, 'O Tempo', '0', [], 1, 5, [])
    ]
  );

  constructor(private googleSpreadsheetsService: GoogleSpreadsheetsService) {}

  public obterSquadApoio() {
    return new Observable<SquadApoio>(observer => {
      observer.next(this.squadApoio);
      observer.complete();
    });
  }

  public listarSquads() {
    this.obterSpreadsheetId().subscribe(evt => this.inicializarSquads());
    this.obterRitosSquads().subscribe();
    this.obterFatosRelevantesSquads().subscribe();

    return new Observable<Squad[]>(observer => {
      observer.next(this.squads.slice(0));
      observer.complete();
    });
  }

  public inicializarSquads() {
    this.squads.forEach(s => {
      if (s.spreadsheetId !== '' && s.spreadsheetId != null) {
        this.obterPlanoDeAcoes(s).subscribe();
        this.obterBurndown(s).subscribe();
      }
    });
  }

  public obterFatosRelevantesSquads() {
    const colunas = {
      nomeSquad: 0,
      fatoRelevante: 1
    };

    return this.googleSpreadsheetsService
      .obterDados(
        environment.spreadsheetIdConfiguracoes,
        environment.rangeFatosRelevantes
      )
      .pipe(
        map((listaDados: { values: Array<any> }) => {
          const listaDadosSemHeader = this.obterListaSemHeader(listaDados);
          this.squads.forEach(s => {
            s.fatosRelevantes = listaDadosSemHeader
              .filter(
                d =>
                  d[colunas.nomeSquad] === s.nome &&
                  d[colunas.fatoRelevante] !== ''
              )
              .map(d => d[colunas.fatoRelevante]);
          });
          return listaDadosSemHeader;
        })
      );
  }

  private obterRitosSquads() {
    const rangeTribo = 'Suricatos';

    const colunas = {
      nome: 1,
      checkArquitetural: 3,
      checkDeExecucao: 4,
      retroDaSprint: 5
    };

    return this.googleSpreadsheetsService
      .obterDados(environment.spreadsheetIdRitos, rangeTribo)
      .pipe(
        map((listaDados: { values: Array<any> }) => {
          const ritosSquads = listaDados.values.filter((squad, i) => i > 6);

          this.squads.forEach(s => {
            const ritosSquad = ritosSquads.find(
              vs => vs[colunas.nome] === `${s.tribo.nome} - ${s.nome}`
            );

            if (!ritosSquad) {
              return;
            }

            s.ritos = [
              new Rito(
                'Check Arquitetural',
                'CA',
                Helper.stringToDate(ritosSquad[colunas.checkArquitetural])
              ),
              new Rito(
                'Check de Execução',
                'CE',
                Helper.stringToDate(ritosSquad[colunas.checkDeExecucao])
              ),
              new Rito(
                'Retro da Sprint',
                'RS',
                Helper.stringToDate(ritosSquad[colunas.retroDaSprint])
              )
            ];
          });
        })
      );
  }

  private obterBurndown(squad: Squad) {
    console.log(squad.spreadsheetId + 'auhsu');
    return this.googleSpreadsheetsService
      .obterDados(squad.spreadsheetId, environment.rangeBurndown)
      .pipe(
        map((listaDados: { values: Array<any> }) => {
          const listaDadosSemHeader = this.obterListaSemHeader(listaDados);
          console.log(listaDados);
          const numeroSprint = +listaDados.values[0][3];
          squad.burndown = Burndown.inicializar(
            numeroSprint,
            listaDadosSemHeader
          );
          return squad.burndown;
        })
      );
  }

  private obterPlanoDeAcoes(squad: Squad) {
    return this.googleSpreadsheetsService
      .obterDados(squad.spreadsheetId, environment.rangeAcoes)
      .pipe(
        map((listaDados: { values: Array<any> }) => {
          const listaDadosSemHeader = this.obterListaSemHeader(listaDados);
          squad.planoDeAcoes = PlanoDeAcoes.inicializar(listaDadosSemHeader);
          return squad.planoDeAcoes;
        })
      );
  }

  private obterSpreadsheetId() {
    return this.googleSpreadsheetsService
      .obterDados(
        environment.spreadsheetIdBurndown,
        environment.rangeSpreadsheetId
      )
      .pipe(
        map((listaDados: { values: Array<any> }) => {
          const dadosSquads = listaDados.values;
          // tslint:disable-next-line: forin
          for (const index in dadosSquads) {
            const dado = dadosSquads[index];
            const squad: Squad = this.squads.filter(
              (s, i) => dado[0] === s.nome
            )[0];
            if (squad) {
              squad.spreadsheetId = dado[1];
            }
          }
        })
      );
  }

  private obterListaSemHeader(listaDados: { values: any[] }) {
    return (listaDados.values || []).filter((d, i) => i > 0 && d[0] !== '');
  }
}
