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
      'Smart Rolls',
      new Cliente(1, 'Gerdau Summit'),
      new Tribo('Triforce', null),
      [
        new Colaborador(1, 'Rogger', 'dev'),
        new Colaborador(2, 'Marcus', 'dev'),
        new Colaborador(3, 'Rodolfo', 'dev'),
        new Colaborador(4, 'Felipe Rocha', 'dev')
      ],
      [
        new Tecnologia('React', 'react'),
        new Tecnologia('Java', 'java'),
        new Tecnologia('Spring Boot', 'springboot'),
        new Tecnologia('Python', 'python'),
        new Tecnologia('AWS', 'aws'),
        new Tecnologia('SQL DB', 'sqldb')
      ],
      ''
    ),
    new Squad(
      2,
      'TOL',
      new Cliente(2, 'Tribanco'),
      new Tribo('Triforce', null),
      [
        new Colaborador(5, 'Júlio', 'dev'),
        new Colaborador(6, 'Lucas Assis', 'dev'),
        new Colaborador(8, 'Luiz', 'dev')
      ],
      [
        new Tecnologia('React', 'react'),
        new Tecnologia('Java', 'java'),
        new Tecnologia('Spring Boot', 'springboot'),
        new Tecnologia('Websphere', 'websphere'),
        new Tecnologia('SQL DB', 'sqldb'),
        new Tecnologia('Oracle', 'oracle'),
        new Tecnologia('Sybase', 'sybase')
      ],
      ''
    ),
    new Squad(
      3,
      'Empresarial',
      new Cliente(3, 'Tricard'),
      new Tribo('Triforce', null),
      [
        new Colaborador(9, 'Luiz', 'dev'),
        new Colaborador(10, 'Paula', 'dev'),
        new Colaborador(11, 'Lucas Capellini', 'dev'),
        new Colaborador(12, 'Aline', 'dev'),
        new Colaborador(13, 'Joice', 'dev')
      ],
      [
        new Tecnologia('Angular JS', 'angular'),
        new Tecnologia('Java', 'java'),
        new Tecnologia('Spring Boot', 'springboot'),
        new Tecnologia('C Sharp', 'csharp'),
        new Tecnologia('Visual Basic .NET', 'visualbasicnet'),
        new Tecnologia('SQL DB', 'sqldb'),
        new Tecnologia('Sybase', 'sybase')
      ],
      ''
    ),
    new Squad(
      4,
      'Abertura de Conta PJ​',
      new Cliente(4, 'Mercantil'),
      new Tribo('Triforce', null),
      [
        new Colaborador(14, 'Emerson', 'dev'),
        new Colaborador(15, 'Eduardo', 'dev'),
        new Colaborador(17, 'Robson', 'dev'),
        new Colaborador(19, 'Tiago', 'dev')
      ],
      [
        new Tecnologia('.Net Framework', 'dotnetframework'),
        new Tecnologia('ASP.Net Web Forms', 'aspnetwebforms')
      ],
      ''
    ),
    new Squad(
      5,
      'Mobile Banking​',
      new Cliente(2, 'Tribanco'),
      new Tribo('Triforce', null),
      [
        new Colaborador(20, 'Silvério', 'dev'),
        new Colaborador(21, 'Raphael', 'dev')
      ],
      [
        new Tecnologia('Kony', 'kony'),
        new Tecnologia('Java', 'java'),
        new Tecnologia('Objective C', 'objectivec')
      ],
      ''
    ),
    new Squad(
      6,
      'Boleta Única',
      new Cliente(2, 'Tribanco'),
      new Tribo('Triforce', null),
      [new Colaborador(22, 'Jordann', 'dev')],
      [
        new Tecnologia('Visual Basic .NET', 'visualbasicnet'),
        new Tecnologia('SQL DB', 'sqldb'),
        new Tecnologia('Sybase', 'sybase')
      ],
      ''
    ),
    new Squad(
      7,
      'App Portador',
      new Cliente(2, 'Tribanco'),
      new Tribo('Triforce', null),
      [new Colaborador(23, 'João', 'dev')],
      [
        new Tecnologia('Java', 'java'),
        new Tecnologia('Spring Boot', 'springboot'),
        new Tecnologia('Kotlin', 'kotlin'),
        new Tecnologia('Swift', 'swift'),
        new Tecnologia('Sybase', 'sybase')
      ],
      ''
    )
  ];

  private squadApoio: SquadApoio = new SquadApoio(
    'Cross',
    [
      new Colaborador(24, 'Lucas Kneipp', 'gc'),
      new Colaborador(25, 'Alice', 'rh'),
      new Colaborador(26, 'Gabriela', 'rh'),
      new Colaborador(27, 'Adriano', 'mkt'),
      new Colaborador(28, 'Ziza', 'mkt')
    ],
    [
      new Cliente(1, 'Gerdau Summit', 'gerdausummit', [], 1, 4, []),
      new Cliente(2, 'Tribanco', 'tribanco', [], 4, 8, []),
      new Cliente(3, 'Tricard', 'tricard', [], 1, 5, []),
      new Cliente(4, 'Mercantil', 'mercantilbrasil', [], 1, 5, [])
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
    const rangeTribo = 'Triforce';

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
    return this.googleSpreadsheetsService
      .obterDados(squad.spreadsheetId, environment.rangeBurndown)
      .pipe(
        map((listaDados: { values: Array<any> }) => {
          const listaDadosSemHeader = this.obterListaSemHeader(listaDados);
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
