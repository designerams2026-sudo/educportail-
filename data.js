/* =========================================================
   Données de démonstration — prototype statique
   (Aucune donnée réelle d'élève ; établissements = extrait
   représentatif de l'académie de La Réunion pour la maquette,
   à synchroniser plus tard avec l'annuaire officiel RNE/UAI)
   ========================================================= */

const ETABLISSEMENTS = [
  { rne:"9741046U", nom:"Lycée Marguerite Jauzelon", type:"LGT", commune:"Saint-Denis", pronote:"jauzelon.pronote.ac-reunion.fr" },
  { rne:"9741256X", nom:"Lycée Léon de Lépervanche", type:"LGT", commune:"Saint-Denis", pronote:"lepervanche.pronote.ac-reunion.fr" },
  { rne:"9741308D", nom:"Lycée polyvalent de la Montagne", type:"LP", commune:"Saint-Denis", pronote:"montagne.pronote.ac-reunion.fr" },
  { rne:"9740001H", nom:"Lycée Sainte-Clotilde", type:"LGT", commune:"Sainte-Clotilde", pronote:"steclotilde.pronote.ac-reunion.fr" },
  { rne:"9740479C", nom:"Lycée Stanislas Gimart", type:"LGT", commune:"Sainte-Clotilde", pronote:"gimart.pronote.ac-reunion.fr" },
  { rne:"9740012V", nom:"Lycée Sarda Garriga", type:"LGT", commune:"Saint-André", pronote:"sardagarriga.pronote.ac-reunion.fr" },
  { rne:"9740210F", nom:"Lycée Marie Curie", type:"LGT", commune:"Saint-Benoît", pronote:"mariecurie.pronote.ac-reunion.fr" },
  { rne:"9740333N", nom:"Lycée polyvalent de Bois d'Olive", type:"LPO", commune:"Saint-Pierre", pronote:"boisdolive.pronote.ac-reunion.fr" },
  { rne:"9740355L", nom:"Lycée Pierre Lagourgue", type:"LGT", commune:"Le Tampon", pronote:"lagourgue.pronote.ac-reunion.fr" },
  { rne:"9740398G", nom:"Lycée Antoine de Saint-Exupéry", type:"LGT", commune:"Les Avirons", pronote:"saintexupery.pronote.ac-reunion.fr" },
  { rne:"9740420E", nom:"Lycée Mémona Hintermann-Afféjee", type:"LPO", commune:"Saint-Denis", pronote:"hintermann.pronote.ac-reunion.fr" },
  { rne:"9740466C", nom:"Lycée professionnel Paul Langevin", type:"LP", commune:"Saint-Denis", pronote:"langevin.pronote.ac-reunion.fr" },
];

const ELEVES = [
  { ine:"0741234567A", nom:"Payet", prenom:"Lény", classe:"1re Générale", etab:"9741046U" },
  { ine:"0741234568B", nom:"Hoarau", prenom:"Maëlys", classe:"Terminale STMG", etab:"9740001H" },
  { ine:"0741234569C", nom:"Grondin", prenom:"Nathan", classe:"2nde Générale", etab:"9741256X" },
  { ine:"0741234570D", nom:"Técher", prenom:"Éléa", classe:"1re Professionnelle", etab:"9740466C" },
  { ine:"0741234571E", nom:"Fontaine", prenom:"Ilan", classe:"Terminale Générale", etab:"9740355L" },
];

const MAILS = [
  { from:"Vie scolaire", subject:"Convocation conseil de classe", preview:"Le conseil de classe du 2nd trimestre aura lieu le…", body:"Bonjour,\n\nLe conseil de classe du 2ᵉ trimestre est fixé au vendredi 18 décembre à 16h30 en salle des professeurs.\n\nCordialement,\nLa vie scolaire" },
  { from:"Rectorat de La Réunion", subject:"Campagne d'orientation post-2nde", preview:"La saisie des vœux d'orientation ouvre le…", body:"Bonjour,\n\nLa campagne de saisie des vœux d'orientation pour les élèves de seconde ouvrira le 6 janvier. Merci d'informer les familles.\n\nDivision des élèves" },
  { from:"Secrétariat", subject:"Mise à jour du livret scolaire", preview:"Merci de compléter les appréciations avant le…", body:"Bonjour,\n\nMerci de finaliser la saisie des appréciations du livret scolaire annuel avant le 20 du mois.\n\nLe secrétariat" },
];

function toast(msg){
  let el = document.getElementById('toast');
  if(!el){
    el = document.createElement('div');
    el.id='toast';
    el.className='toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=> el.classList.remove('show'), 2400);
}

function initTabs(){
  document.querySelectorAll('.tabs').forEach(tabbar=>{
    const panelGroup = tabbar.dataset.panels;
    tabbar.querySelectorAll('.tab').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        tabbar.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll(`.tabpanel[data-group="${panelGroup}"]`).forEach(p=>p.classList.remove('active'));
        document.getElementById(btn.dataset.target).classList.add('active');
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', initTabs);
