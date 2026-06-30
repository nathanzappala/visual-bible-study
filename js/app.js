/**
 * Visual Bible Study - Main Application
 * Analisi strutturale, logica e diagrammi dei testi biblici
 */

// ============================================
// TRADUZIONI INCORPORATE (per funzionamento offline e file://)
// ============================================
const TRANSLATIONS = {
  it: {
    main_title: "Visual Bible Study",
    main_subtitle: "Analisi strutturale, logica e diagrammi dei testi biblici",
    btn_guide: "Guida rapida",
    btn_reset: "Reset completo",
    sect1_title: "1. Inserisci il Testo",
    sect1_desc: "Scrivi o incolla un versetto. Ogni riga diventerà un blocco logico indipendente (proposizione).",
    input_placeholder: "Incolla il testo qui...\nEsempio:\nNon mi vergogno del Vangelo\nperché esso è potenza di Dio\nper la salvezza di chiunque crede",
    btn_split: "Scomponi in Righe",
    sect2_title: "2. Collega le Proposizioni",
    sect2_desc: "Usa i pulsanti Da (Sorgente/i) e A (Destinazione/i) presenti su ogni riga a sinistra per definire i gruppi, poi clicca su \"Disegna Arco\".",
    label_relation: "Tipo di Relazione Logica",
    label_custom_name: "Nome Relazione Custom",
    custom_placeholder: "Es. Citazione, Ironia...",
    btn_clear: "Refresh Archi",
    btn_draw: "Disegna Arco",
    sect3_title: "3. Glossario Relazioni",
    sect3_desc: "Seleziona una relazione per consultarne la definizione teorica accademica:",
    glossary_default: "-- Scegli una relazione --",
    arcs_active: "Archi Attivi",
    arcs_empty: "Nessun arco creato. Collega le frasi per iniziare.",
    board_title: "Lavagna di Studio Attiva",
    board_tip: "Passa con il mouse sulle righe: gli strumenti appariranno sulla sinistra per non rubare spazio al testo.",
    empty_title: "La tua lavagna è vuota",
    empty_desc: "Inserisci un testo biblico nel pannello di sinistra e premi \"Scomponi in Righe\" per iniziare lo studio strutturale.",
    btn_cancel: "Annulla",
    btn_confirm: "Sì, conferma",
    btn_guide_confirm: "Ottimo, ho capito!",
    guide_modal_title: "Guida Rapida Visual Bible Study",
    guide_modal_content: "<p><strong>Visual Bible Study</strong> è uno strumento per l'analisi strutturale dei testi biblici. Permette di scomporre un passo in proposizioni (righe) e collegarle con relazioni logiche, visualizzando il tutto su una lavagna interattiva.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">📖 1. Inserisci il Testo</h4>\n<p>Scrivi o incolla il testo biblico nell'area di input. Ogni riga diventerà un blocco logico indipendente.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">✂️ Scomponi in Righe</h4>\n<p>Clicca \"Scomponi in Righe\" per dividere il testo in proposizioni pronte per l'analisi.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">🔗 2. Collega le Proposizioni</h4>\n<p>Passa con il mouse su una riga: apparirà un menu a sinistra. Usa <strong>Da</strong> (Sorgente) e <strong>A</strong> (Destinazione) per selezionare le righe da collegare. Scegli il tipo di relazione logica (Serie, Causa, Scopo, ecc.) e clicca \"Disegna Arco\". Puoi anche creare relazioni personalizzate.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">✏️ Formattazione Testo</h4>\n<p>Seleziona una parola o frase, poi usa i pulsanti <strong>B</strong> (grassetto), <strong>U</strong> (sottolineato) o <strong>H</strong> (evidenzia) dal menu fluttuante.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">↔️ Indentazione</h4>\n<p>Usa le frecce sinistra/destra nel menu per aumentare o ridurre il rientro di una riga, creando una struttura gerarchica.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">📚 3. Glossario Relazioni</h4>\n<p>Il glossario spiega ogni tipo di relazione logica con definizioni accademiche. Consultalo per capire il significato di ogni abbreviazione.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">🗑️ Eliminazione</h4>\n<p>Clicca sulla <strong>X</strong> nel menu di una riga per eliminarla. Clicca sull'etichetta di un arco (o sulla X nella lista \"Archi Attivi\") per eliminare una relazione.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">🌐 Lingua e Reset</h4>\n<p>Usa i pulsanti IT/EN per cambiare lingua. Il pulsante \"Reset totale\" cancella tutto lo studio corrente.</p>",
    alert_no_text: "Inserisci del testo per continuare!",
    alert_no_selection: "Seleziona almeno una riga come Sorgente (Da) e una come Destinazione (A)!",
    alert_custom_empty: "Inserisci un nome per la relazione personalizzata!",
    alert_reset_success: "Studio resettato con successo!",
    confirm_reset_title: "Reset totale",
    confirm_reset_msg: "Sei sicuro di voler resettare l'intero studio? Tutti gli archi ed i testi inseriti verranno eliminati permanentemente.",
    confirm_del_row_title: "Elimina frase",
    confirm_del_row_msg: "Sei sicuro di voler eliminare la riga {num}? Gli archi collegati verranno modificati o eliminati.",
    confirm_del_arc_title: "Elimina Arco",
    confirm_del_arc_msg: "Vuoi rimuovere l'arco \"{relation}\" che unisce le righe [{src}] con [{tgt}]?",
    confirm_del_arc_generic: "Vuoi rimuovere questo collegamento logico?",
    none: "Nessuna",
    cat_coord: "Relazioni Coordinate",
    cat_sub: "Relazioni Subordinate",
    cat_ext: "Relazioni Estese",
    cat_custom: "Personalizzato",
    tool_from: "Da",
    tool_to: "A",
    tool_bold: "Grassetto",
    tool_under: "Sottolineato",
    tool_high: "Evidenzia",
    tool_dec: "Riduci rientro",
    tool_inc: "Aumenta rientro",
    tool_del: "Elimina riga",
    default_text: "Non mi vergogno del Vangelo\nperché esso è potenza di Dio\nper la salvezza di chiunque crede",
    ph_from: "Frase/i: {list}",
    ph_to: "Frase/i: {list}",
    btn_about: "Info",
    btn_close: "Chiudi",
    about_modal_title: "Informazioni",
    about_modal_text: "Visual Bible Study è un progetto senza scopo di lucro sviluppato con strumenti AI. È un esperimento personale, non è destinato alla diffusione di massa.",
    about_modal_inspired: "L'applicazione prende libera ispirazione da Biblearc riguardo l'utilizzo dell'elemento grafico degli archi per collegare preposizioni all'interno di passaggi biblici, con elenco di relazioni di utilizzo comune. Qualsiasi altro riferimento a elementi grafici presenti nell'app o similitudini nel codice sorgente dell'app \"Biblearc\" sono assolutamente non intenzionali e pura coincidenza.",
    about_modal_developed: "L'app è stata sviluppata tramite agenti AI da zero."
  },
  en: {
    main_title: "Visual Bible Study",
    main_subtitle: "Structural, logical, and diagrammatic analysis of biblical texts",
    btn_guide: "Quick guide",
    btn_reset: "Complete reset",
    sect1_title: "1. Enter Text",
    sect1_desc: "Write or paste a verse. Each line will become an independent logical block (proposition).",
    input_placeholder: "Paste text here...\nExample:\nI am not ashamed of the gospel\nbecause it is the power of God\nthat brings salvation to everyone who believes",
    btn_split: "Split into Lines",
    sect2_title: "2. Connect Propositions",
    sect2_desc: "Use the From (Source/s) and To (Destination/s) buttons on each row on the left to define groups, then click \"Draw Arc\".",
    label_relation: "Logical Relationship Type",
    label_custom_name: "Custom Relation Name",
    custom_placeholder: "e.g., Quotation, Irony...",
    btn_clear: "Refresh Arcs",
    btn_draw: "Draw Arc",
    sect3_title: "3. Relationship Glossary",
    sect3_desc: "Select a relationship to read its academic/theoretical definition:",
    glossary_default: "-- Choose a relationship --",
    arcs_active: "Active Arcs",
    arcs_empty: "No arcs created. Connect lines to begin.",
    board_title: "Active Study Board",
    board_tip: "Hover over rows: tools will appear on the left to keep text space clean.",
    empty_title: "Your board is empty",
    empty_desc: "Enter a biblical text in the left panel and click 'Split into Lines' to start your structural study.",
    btn_cancel: "Cancel",
    btn_confirm: "Yes, confirm",
    btn_guide_confirm: "Great, I got it!",
    guide_modal_title: "Visual Bible Study Quick Guide",
    guide_modal_content: "<p><strong>Visual Bible Study</strong> is a tool for structural analysis of biblical texts. It allows you to break down a passage into propositions (rows) and connect them with logical relationships, visualized on an interactive board.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">📖 1. Enter the Text</h4>\n<p>Write or paste the biblical text into the input area. Each line will become an independent logical block.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">✂️ Split into Lines</h4>\n<p>Click \"Split into Lines\" to divide the text into propositions ready for analysis.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">🔗 2. Connect Propositions</h4>\n<p>Hover over a row: a menu will appear on the left. Use <strong>From</strong> (Source) and <strong>To</strong> (Destination) to select the rows to connect. Choose the logical relationship type (Series, Cause, Purpose, etc.) and click \"Draw Arc\". You can also create custom relationships.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">✏️ Text Formatting</h4>\n<p>Select a word or phrase, then use the <strong>B</strong> (bold), <strong>U</strong> (underline) or <strong>H</strong> (highlight) buttons from the floating menu.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">↔️ Indentation</h4>\n<p>Use the left/right arrows in the menu to increase or decrease a row's indentation, creating a hierarchical structure.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">📚 3. Relationship Glossary</h4>\n<p>The glossary explains each logical relationship type with academic definitions. Consult it to understand the meaning of each abbreviation.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">🗑️ Deletion</h4>\n<p>Click the <strong>X</strong> in a row's menu to delete it. Click on an arc label (or the X in the \"Active Arcs\" list) to delete a relationship.</p>\n\n<h4 class=\"font-bold text-slate-800 mt-3\">🌐 Language and Reset</h4>\n<p>Use the IT/EN buttons to switch languages. The \"Total Reset\" button clears the entire current study.</p>",
    alert_no_text: "Please enter some text to continue!",
    alert_no_selection: "Select at least one row as Source (From) and one as Destination (To)!",
    alert_custom_empty: "Please enter a name for your custom relationship!",
    alert_reset_success: "Study successfully reset!",
    confirm_reset_title: "Total Reset",
    confirm_reset_msg: "Are you sure you want to reset the entire study? All arcs and texts will be permanently deleted.",
    confirm_del_row_title: "Delete Row",
    confirm_del_row_msg: "Are you sure you want to delete row {num}? Connected arcs will be modified or deleted.",
    confirm_del_arc_title: "Delete Arc",
    confirm_del_arc_msg: "Do you want to remove the \"{relation}\" arc connecting rows [{src}] to [{tgt}]?",
    confirm_del_arc_generic: "Do you want to remove this logical connection?",
    none: "None",
    cat_coord: "Coordinate Relationships",
    cat_sub: "Subordinate Relationships",
    cat_ext: "Extended Relationships",
    cat_custom: "Custom",
    tool_from: "From",
    tool_to: "To",
    tool_bold: "Bold",
    tool_under: "Underline",
    tool_high: "Highlight",
    tool_dec: "Decrease indent",
    tool_inc: "Increase indent",
    tool_del: "Delete row",
    default_text: "I am not ashamed of the gospel\nbecause it is the power of God\nfor the salvation of everyone who believes",
    ph_from: "Row/s: {list}",
    ph_to: "Row/s: {list}",
    btn_about: "About",
    btn_close: "Close",
    about_modal_title: "About",
    about_modal_text: "Visual Bible Study is a non-profit project developed using AI tools. It is a personal experiment, not intended for mass distribution.",
    about_modal_inspired: "The application takes free inspiration from Biblearc regarding the use of the arc graphical element to connect prepositions within biblical passages, with a list of commonly used relationships. Any other references to graphic elements in the app or similarities in the source code of the \"Biblearc\" app are absolutely unintentional and pure coincidence.",
    about_modal_developed: "The app was developed from scratch using AI agents."
  }
};

class BiblearcApp {
  constructor() {
    // Stato globale
    this.propositions = [];
    this.indentationLevels = [];
    this.arcs = [];
    this.selectedSources = [];
    this.selectedTargets = [];
    this.currentLang = 'it';
    this.i18n = TRANSLATIONS.it;
    this.confirmCallback = null;
    this._debounceTimer = null;

    // Configurazioni
    this.STORAGE_KEY = 'biblearc_sim_state';
    this.LANG_KEY = 'biblearc_lang';
    this.DARK_KEY = 'biblearc_dark';
    this.MAX_INDENT = 6;

    this.init();
  }

  async init() {
    // Carica preferenza lingua
    const savedLang = localStorage.getItem(this.LANG_KEY);
    if (savedLang === 'it' || savedLang === 'en') {
      this.currentLang = savedLang;
    } else {
      const sysLang = navigator.language || navigator.userLanguage;
      if (sysLang.startsWith('en')) this.currentLang = 'en';
    }

    // Carica traduzioni incorporate
    this.i18n = TRANSLATIONS[this.currentLang] || TRANSLATIONS.it;
    this.applyTranslations();

    // Crea icone Lucide
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Inizializza dark mode
    this._initDarkMode();

    // Carica stato salvato
    this.loadFromStorage();

    // Event listener resize con debounce
    window.addEventListener('resize', () => this.debouncedDraw());

    // Registra il Service Worker per PWA (solo se supportato)
    this._registerServiceWorker();
  }

  _initDarkMode() {
    const saved = localStorage.getItem(this.DARK_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode = saved !== null ? saved === 'true' : prefersDark;
    this._applyDarkMode();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem(this.DARK_KEY, this.isDarkMode.toString());
    this._applyDarkMode();
    this.drawAllArcs();
  }

  _applyDarkMode() {
    const html = document.documentElement;
    const icon = document.querySelector('.dark-mode-icon');
    if (this.isDarkMode) {
      html.classList.add('dark');
      if (icon) {
        icon.setAttribute('data-lucide', 'sun');
      }
    } else {
      html.classList.remove('dark');
      if (icon) {
        icon.setAttribute('data-lucide', 'moon');
      }
    }
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  _registerServiceWorker() {
    // Non registrare il Service Worker se siamo su file://
    if (location.protocol === 'file:') return;
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch((err) => {
        console.warn('Service Worker registration failed:', err);
      });
    }
  }

  async changeLanguage(lang) {
    if (lang !== 'it' && lang !== 'en') return;
    this.currentLang = lang;
    localStorage.setItem(this.LANG_KEY, lang);
    this.i18n = TRANSLATIONS[lang] || TRANSLATIONS.it;
    this.applyTranslations();
    this.renderPropositions();
    this.drawAllArcs();
  }

  applyTranslations() {
    const dict = this.i18n;

    // Stili pulsanti lingua
    const btnIt = document.getElementById('lang-it');
    const btnEn = document.getElementById('lang-en');
    if (this.currentLang === 'it') {
      btnIt.className = "px-2.5 py-1 text-xs font-bold rounded-md transition duration-150 bg-white text-indigo-600 shadow-sm";
      btnEn.className = "px-2.5 py-1 text-xs font-bold rounded-md transition duration-150 text-slate-500 hover:text-slate-800";
    } else {
      btnEn.className = "px-2.5 py-1 text-xs font-bold rounded-md transition duration-150 bg-white text-indigo-600 shadow-sm";
      btnIt.className = "px-2.5 py-1 text-xs font-bold rounded-md transition duration-150 text-slate-500 hover:text-slate-800";
    }

    // Traduzione elementi statici tramite data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (key === 'guide_modal_content') {
          el.innerHTML = dict[key];
        } else {
          el.innerText = dict[key];
        }
      }
    });

    // Aggiorna placeholder input
    document.getElementById('bible-input').placeholder = dict.input_placeholder;
    document.getElementById('custom-relation-input').placeholder = dict.custom_placeholder;

    // Aggiorna modal guida rapida
    const guideBody = document.getElementById('guide-modal-body');
    if (dict.guide_modal_content) {
      guideBody.innerHTML = dict.guide_modal_content;
    } else {
      guideBody.innerHTML = '<p>Guida rapida non disponibile.</p>';
    }

    // Popola select
    this.populateRelationSelect();
    this.populateGlossarySelect();

    // Pulisce definizione glossario visibile
    document.getElementById('glossary-definition-box').classList.add('hidden');
  }

  populateRelationSelect() {
    const select = document.getElementById('relation-type');
    const dict = this.i18n;
    const selectedVal = select.value;

    select.innerHTML = `
      <optgroup label="${dict.cat_coord}">
        <option value="Serie (S)">${RELATION_DEFINITIONS["Serie (S)"].translations[this.currentLang].label}</option>
        <option value="Progressione (P)">${RELATION_DEFINITIONS["Progressione (P)"].translations[this.currentLang].label}</option>
        <option value="Alternativa (Alt)">${RELATION_DEFINITIONS["Alternativa (Alt)"].translations[this.currentLang].label}</option>
      </optgroup>
      <optgroup label="${dict.cat_sub}">
        <option value="Base/Causa (G)">${RELATION_DEFINITIONS["Base/Causa (G)"].translations[this.currentLang].label}</option>
        <option value="Inferenza (Inf)">${RELATION_DEFINITIONS["Inferenza (Inf)"].translations[this.currentLang].label}</option>
        <option value="Azione-Risultato (A-R)">${RELATION_DEFINITIONS["Azione-Risultato (A-R)"].translations[this.currentLang].label}</option>
        <option value="Mezzo (M)">${RELATION_DEFINITIONS["Mezzo (M)"].translations[this.currentLang].label}</option>
        <option value="Idea-Spiegazione (Id/Exp)">${RELATION_DEFINITIONS["Idea-Spiegazione (Id/Exp)"].translations[this.currentLang].label}</option>
        <option value="Confronto (Cf)">${RELATION_DEFINITIONS["Confronto (Cf)"].translations[this.currentLang].label}</option>
        <option value="Domanda-Risposta (D/R)">${RELATION_DEFINITIONS["Domanda-Risposta (D/R)"].translations[this.currentLang].label}</option>
        <option value="Scopo (Purp)">${RELATION_DEFINITIONS["Scopo (Purp)"].translations[this.currentLang].label}</option>
        <option value="Condizione (Cond)">${RELATION_DEFINITIONS["Condizione (Cond)"].translations[this.currentLang].label}</option>
        <option value="Negativo-Positivo (+/-)">${RELATION_DEFINITIONS["Negativo-Positivo (+/-)"].translations[this.currentLang].label}</option>
        <option value="Concessiva (Csv)">${RELATION_DEFINITIONS["Concessiva (Csv)"].translations[this.currentLang].label}</option>
      </optgroup>
      <optgroup label="${dict.cat_ext}">
        <option value="Attenzione (Att)">${RELATION_DEFINITIONS["Attenzione (Att)"].translations[this.currentLang].label}</option>
        <option value="Avvertimento (W)">${RELATION_DEFINITIONS["Avvertimento (W)"].translations[this.currentLang].label}</option>
        <option value="Parentetica (Par)">${RELATION_DEFINITIONS["Parentetica (Par)"].translations[this.currentLang].label}</option>
        <option value="Esortativa (Hort)">${RELATION_DEFINITIONS["Esortativa (Hort)"].translations[this.currentLang].label}</option>
      </optgroup>
      <optgroup label="${dict.cat_custom}">
        <option value="Custom">✨ ${dict.label_custom_name}...</option>
      </optgroup>
    `;

    if (selectedVal) select.value = selectedVal;
  }

  populateGlossarySelect() {
    const select = document.getElementById('glossary-selector');
    const dict = this.i18n;
    select.innerHTML = `<option value="">${dict.glossary_default}</option>`;

    Object.keys(RELATION_DEFINITIONS).forEach(key => {
      const option = document.createElement('option');
      option.value = key;
      option.innerText = RELATION_DEFINITIONS[key].translations[this.currentLang].label;
      select.appendChild(option);
    });
  }

  saveToStorage() {
    const state = {
      propositions: this.propositions,
      indentationLevels: this.indentationLevels,
      arcs: this.arcs,
      bibleInput: document.getElementById('bible-input').value,
      lang: this.currentLang
    };
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Errore salvataggio stato:', e);
    }
  }

  loadFromStorage() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (!saved) {
      document.getElementById('bible-input').value = this.i18n.default_text || '';
      this.parseText();
      return;
    }

    try {
      const state = JSON.parse(saved);
      
      if (state.lang && (state.lang === 'it' || state.lang === 'en')) {
        this.currentLang = state.lang;
        this.i18n = TRANSLATIONS[this.currentLang] || TRANSLATIONS.it;
      }
      
      document.getElementById('bible-input').value = typeof state.bibleInput === 'string' ? state.bibleInput : '';
      this.propositions = Array.isArray(state.propositions) ? state.propositions : [];
      this.indentationLevels = Array.isArray(state.indentationLevels) ? state.indentationLevels : [];
      this.arcs = Array.isArray(state.arcs) ? state.arcs : [];

      this.applyTranslations();
      this.renderPropositions();
      this.drawAllArcs();
    } catch (e) {
      console.error('Errore ripristino stato:', e);
      this.applyTranslations();
      document.getElementById('bible-input').value = this.i18n.default_text || '';
      this.parseText();
    }
  }

  parseText() {
    const input = document.getElementById('bible-input').value.trim();
    if (!input) {
      this.showFeedback(this.i18n.alert_no_text);
      return;
    }

    if (this.arcs.length > 0) {
      this.showCustomConfirm(
        this.i18n.confirm_reset_title,
        this.i18n.confirm_reset_msg,
        () => {
          this._doParseText(input);
        }
      );
      return;
    }

    this._doParseText(input);
  }

  _doParseText(input) {
    this.propositions = input.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    this.indentationLevels = new Array(this.propositions.length).fill(0);
    this.arcs = [];
    this.clearSelection();

    this.renderPropositions();
    this.drawAllArcs();
    this.saveToStorage();
  }

  renderPropositions() {
    const container = document.getElementById('nodes-container');
    const emptyState = document.getElementById('empty-state');

    if (this.propositions.length === 0) {
      container.innerHTML = '';
      emptyState.classList.remove('hidden');
      document.getElementById('arc-counter').innerText = '0';
      return;
    }

    emptyState.classList.add('hidden');

    const needsFullRender = container.children.length !== this.propositions.length;

    if (needsFullRender) {
      container.innerHTML = '';
      this.propositions.forEach((prop, index) => {
        const row = this._createRowElement(prop, index);
        container.appendChild(row);
      });
    } else {
      this.propositions.forEach((prop, index) => {
        const row = document.getElementById(`node-${index}`);
        if (!row) {
          container.innerHTML = '';
          this.propositions.forEach((p, i) => {
            container.appendChild(this._createRowElement(p, i));
          });
          if (window.lucide) window.lucide.createIcons();
          return;
        }

        const level = this.indentationLevels[index] || 0;
        row.style.marginLeft = `${level * 24}px`;

        const isSource = this.selectedSources.includes(index);
        const isTarget = this.selectedTargets.includes(index);
        let borderClass = 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600';
        if (isSource) {
          borderClass = 'border-indigo-500 ring-2 ring-indigo-200 bg-indigo-50/10 dark:bg-indigo-950/30 dark:ring-indigo-800';
        } else if (isTarget) {
          borderClass = 'border-emerald-500 ring-2 ring-emerald-200 bg-emerald-50/10 dark:bg-emerald-950/30 dark:ring-emerald-800';
        }
        row.className = `flex items-center gap-4 py-3.5 px-5 rounded-xl border shadow-sm transition-all duration-200 group relative ${borderClass}`;
        row.style.marginLeft = `${level * 24}px`;

        const fromBtn = row.querySelector('.btn-source');
        const toBtn = row.querySelector('.btn-target');
        if (fromBtn) {
          fromBtn.className = `flex-1 py-1 text-xs font-bold rounded border transition-all ${
            isSource
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
              : 'bg-white text-indigo-600 border-indigo-200 hover:bg-indigo-50'
          }`;
          fromBtn.innerText = this.i18n.tool_from || 'Da';
        }
        if (toBtn) {
          toBtn.className = `flex-1 py-1 text-xs font-bold rounded border transition-all ${
            isTarget
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
              : 'bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50'
          }`;
          toBtn.innerText = this.i18n.tool_to || 'A';
        }
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  _createRowElement(prop, index) {
    const level = this.indentationLevels[index] || 0;
    const isSource = this.selectedSources.includes(index);
    const isTarget = this.selectedTargets.includes(index);

    const row = document.createElement('div');
    row.id = `node-${index}`;

    let borderClass = 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600';
    if (isSource) {
      borderClass = 'border-indigo-500 ring-2 ring-indigo-200 bg-indigo-50/10 dark:bg-indigo-950/30 dark:ring-indigo-800';
    } else if (isTarget) {
      borderClass = 'border-emerald-500 ring-2 ring-emerald-200 bg-emerald-50/10 dark:bg-emerald-950/30 dark:ring-emerald-800';
    }

    row.className = `flex items-center gap-4 py-3.5 px-5 rounded-xl border shadow-sm transition-all duration-200 group relative ${borderClass}`;
    row.style.marginLeft = `${level * 24}px`;

    const dict = this.i18n;

    row.innerHTML = `
      <div class="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 flex items-center justify-center font-bold text-xs select-none">
        ${index + 1}
      </div>

      <div contenteditable="true" id="editable-${index}" 
        onblur="app.updatePropositionText(${index})" oninput="app.onTextChange()"
        class="flex-1 editable-box font-medium text-slate-800 dark:text-slate-200 text-sm sm:text-base pr-4">
        ${prop}
      </div>

      <div class="absolute right-full top-1/2 -translate-y-1/2 pr-3 z-30 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-150 select-none">
        <div class="flex flex-col gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-2 rounded-xl shadow-lg dark:shadow-black/30 w-28 text-center">
          
          <div class="flex gap-1 justify-between">
            <button onclick="app.toggleSelectionGroup(${index}, 'source')" title="${dict.tool_from}" 
              class="btn-source flex-1 py-1 text-xs font-bold rounded border transition-all ${
                isSource 
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' 
                : 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-slate-700'
              }">
              ${dict.tool_from}
            </button>
            <button onclick="app.toggleSelectionGroup(${index}, 'target')" title="${dict.tool_to}" 
              class="btn-target flex-1 py-1 text-xs font-bold rounded border transition-all ${
                isTarget 
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' 
                : 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-slate-700'
              }">
              ${dict.tool_to}
            </button>
          </div>

          <div class="h-[1px] bg-slate-100 dark:bg-slate-700 my-0.5"></div>

          <div class="flex gap-1 justify-center">
            <button onmousedown="event.preventDefault(); app.applyFormat('bold');" title="${dict.tool_bold}" class="w-7 h-7 flex items-center justify-center rounded font-extrabold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition">B</button>
            <button onmousedown="event.preventDefault(); app.applyFormat('underline');" title="${dict.tool_under}" class="w-7 h-7 flex items-center justify-center rounded underline text-sm hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition">U</button>
            <button onmousedown="event.preventDefault(); app.applyFormat('backColor', '#fef08a');" title="${dict.tool_high}" class="w-7 h-7 flex items-center justify-center rounded bg-yellow-100 dark:bg-yellow-900 text-slate-700 dark:text-slate-300 hover:bg-yellow-200 dark:hover:bg-yellow-800 text-xs font-bold border border-yellow-200 dark:border-yellow-700 transition">H</button>
          </div>

          <div class="h-[1px] bg-slate-100 dark:bg-slate-700 my-0.5"></div>

          <div class="flex gap-1 justify-between items-center">
            <button onclick="app.changeIndentation(${index}, -1)" title="${dict.tool_dec}" class="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition">
              <i data-lucide="chevron-left" class="w-4 h-4"></i>
            </button>
            <button onclick="app.changeIndentation(${index}, 1)" title="${dict.tool_inc}" class="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition">
              <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </button>
            <button onclick="app.triggerDeletePropositionConfirmation(${index})" title="${dict.tool_del}" class="p-1 hover:bg-rose-50 dark:hover:bg-rose-950 rounded text-rose-500 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition ml-auto">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          </div>

        </div>
      </div>
    `;

    return row;
  }

  applyFormat(command, value = null) {
    document.execCommand(command, false, value);
    this.propositions.forEach((_, idx) => {
      const el = document.getElementById(`editable-${idx}`);
      if (el) this.propositions[idx] = el.innerHTML;
    });
    this.saveToStorage();
    this.debouncedDraw();
  }

  updatePropositionText(index) {
    const el = document.getElementById(`editable-${index}`);
    if (el) {
      this.propositions[index] = el.innerHTML;
      this.saveToStorage();
      this.debouncedDraw();
    }
  }

  onTextChange() {
    this.debouncedDraw();
  }

  changeIndentation(index, direction) {
    const currentLevel = this.indentationLevels[index] || 0;
    const newLevel = Math.max(0, Math.min(this.MAX_INDENT, currentLevel + direction));
    this.indentationLevels[index] = newLevel;
    this.renderPropositions();
    this.saveToStorage();
    this.debouncedDraw();
  }

  toggleSelectionGroup(index, type) {
    if (type === 'source') {
      const sIndex = this.selectedSources.indexOf(index);
      if (sIndex > -1) {
        this.selectedSources.splice(sIndex, 1);
      } else {
        const tIndex = this.selectedTargets.indexOf(index);
        if (tIndex > -1) this.selectedTargets.splice(tIndex, 1);
        this.selectedSources.push(index);
      }
    } else {
      const tIndex = this.selectedTargets.indexOf(index);
      if (tIndex > -1) {
        this.selectedTargets.splice(tIndex, 1);
      } else {
        const sIndex = this.selectedSources.indexOf(index);
        if (sIndex > -1) this.selectedSources.splice(sIndex, 1);
        this.selectedTargets.push(index);
      }
    }

    this.renderPropositions();
    this.drawAllArcs();
  }

  clearSelection() {
    this.selectedSources = [];
    this.selectedTargets = [];
    this.renderPropositions();
    this.drawAllArcs();
  }

  handleRelationTypeChange() {
    const select = document.getElementById('relation-type');
    const container = document.getElementById('custom-relation-container');
    if (select.value === 'Custom') {
      container.classList.remove('hidden');
    } else {
      container.classList.add('hidden');
    }
  }

  createArc() {
    if (this.selectedSources.length === 0 || this.selectedTargets.length === 0) {
      this.showFeedback(this.i18n.alert_no_selection);
      return;
    }

    let relationType = document.getElementById('relation-type').value;
    if (relationType === 'Custom') {
      const customInput = document.getElementById('custom-relation-input').value.trim();
      if (!customInput) {
        this.showFeedback(this.i18n.alert_custom_empty);
        return;
      }
      relationType = customInput;
    }

    const arcId = `arc-${Date.now()}`;

    this.arcs.push({
      id: arcId,
      sources: [...this.selectedSources],
      targets: [...this.selectedTargets],
      relation: relationType
    });

    document.getElementById('custom-relation-input').value = '';
    document.getElementById('custom-relation-container').classList.add('hidden');
    document.getElementById('relation-type').value = 'Serie (S)';

    this.clearSelection();
    this.drawAllArcs(true);
    this.saveToStorage();
  }

  deleteArc(arcId) {
    this.arcs = this.arcs.filter(arc => arc.id !== arcId);
    this.drawAllArcs();
    this.saveToStorage();
  }

  _assignArcColumns(arcData) {
    if (arcData.length === 0) return [];

    const sorted = [...arcData].sort((a, b) => a.avgY - b.avgY);
    const columns = [];
    const assignments = new Map();

    sorted.forEach((arc) => {
      let assigned = false;
      for (let col = 0; col < columns.length; col++) {
        if (arc.minY > columns[col].maxY + 20) {
          columns[col].maxY = Math.max(columns[col].maxY, arc.maxY);
          assignments.set(arc.dataIndex, col);
          assigned = true;
          break;
        }
      }
      if (!assigned) {
        columns.push({ maxY: arc.maxY });
        assignments.set(arc.dataIndex, columns.length - 1);
      }
    });

    return Array.from({ length: arcData.length }, (_, i) => {
      const col = assignments.get(i) ?? 0;
      return 60 + col * 120;
    });
  }

  drawAllArcs(shouldScrollToNew = false) {
    const svg = document.getElementById('arc-svg-canvas');
    if (!svg) return;
    const scrollContainer = document.getElementById('canvas-container');
    const container = document.getElementById('board-inner');

    const paths = svg.querySelectorAll('.interactive-path, .arc-label-group, .bracket-path');
    paths.forEach(p => p.remove());

    const oldSpacer = container.querySelector('.canvas-spacer');
    if (oldSpacer) oldSpacer.remove();

    const containerRect = svg.getBoundingClientRect();
    // NOTA: usiamo svg.getBoundingClientRect() perché l'SVG è position:absolute
    // con top:0,left:0 dentro #board-inner, quindi l'origine (0,0) delle coordinate
    // SVG corrisponde al padding-box di board-inner, non al border-box.

    document.getElementById('arc-counter').innerText = this.arcs.length;

    const listContainer = document.getElementById('arcs-list');
    if (this.arcs.length === 0) {
      listContainer.innerHTML = this.i18n.arcs_empty;
      listContainer.className = "space-y-2 max-h-48 overflow-y-auto pr-1 text-sm text-slate-400 text-center py-4";
    } else {
      listContainer.innerHTML = '';
      listContainer.className = "space-y-2 max-h-48 overflow-y-auto pr-1 text-sm";
    }

    const arcMetrics = [];

    this.arcs.forEach((arc, arcIndex) => {
      const colConfig = getRelationConfig(arc.relation, this.isDarkMode);

      const sourceCoords = arc.sources.map(idx => {
        const el = document.getElementById(`node-${idx}`);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
          right: rect.right - containerRect.left,
          centerY: (rect.top + rect.height / 2) - containerRect.top
        };
      }).filter(c => c !== null);

      if (sourceCoords.length === 0) return;

      const targetCoords = arc.targets.map(idx => {
        const el = document.getElementById(`node-${idx}`);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
          right: rect.right - containerRect.left,
          centerY: (rect.top + rect.height / 2) - containerRect.top
        };
      }).filter(c => c !== null);

      if (targetCoords.length === 0) return;

      const srcYValues = sourceCoords.map(c => c.centerY);
      const minYSource = Math.min(...srcYValues);
      const maxYSource = Math.max(...srcYValues);
      const avgYSource = (minYSource + maxYSource) / 2;
      const maxRightSource = Math.max(...sourceCoords.map(c => c.right));

      const tgtYValues = targetCoords.map(c => c.centerY);
      const minYTarget = Math.min(...tgtYValues);
      const maxYTarget = Math.max(...tgtYValues);
      const avgYTarget = (minYTarget + maxYTarget) / 2;
      const maxRightTarget = Math.max(...targetCoords.map(c => c.right));

      let startX, startY;
      let endX, endY;

      if (sourceCoords.length > 1) {
        startX = maxRightSource + 27.75;
        startY = avgYSource;
      } else {
        startX = sourceCoords[0].right;
        startY = sourceCoords[0].centerY;
      }

      if (targetCoords.length > 1) {
        endX = maxRightTarget + 27.75;
        endY = avgYTarget;
      } else {
        endX = targetCoords[0].right;
        endY = targetCoords[0].centerY;
      }

      const verticalDistance = Math.abs(endY - startY);
      const minY = Math.min(startY, endY);
      const maxY = Math.max(startY, endY);
      const avgY = (startY + endY) / 2;

      arcMetrics.push({
        arc,
        arcIndex,
        colConfig,
        sourceCoords,
        targetCoords,
        startX, startY, endX, endY,
        verticalDistance,
        minY, maxY, avgY,
        maxRightSource, maxRightTarget,
        minYSource, maxYSource,
        minYTarget, maxYTarget
      });
    });

    const columnData = arcMetrics.map((m, i) => ({
      dataIndex: i,
      id: m.arc.id,
      minY: m.minY,
      maxY: m.maxY,
      avgY: m.avgY,
      arcIndex: m.arcIndex
    }));
    const columnOffsets = this._assignArcColumns(columnData);

    let maxArcX = 0;

    arcMetrics.forEach((m, i) => {
      const distOffset = Math.max(180, Math.min(500, m.verticalDistance * 0.45));
      const curveOffset = Math.max(columnOffsets[i] * 0.8, distOffset * 0.7);
      const endCurveX = Math.max(m.startX, m.endX) + curveOffset + 40;
      if (endCurveX > maxArcX) maxArcX = endCurveX;
    });

    let maxTextRight = 0;
    this.propositions.forEach((_, idx) => {
      const el = document.getElementById(`node-${idx}`);
      if (el) {
        const rect = el.getBoundingClientRect();
        const right = rect.right - containerRect.left;
        if (right > maxTextRight) maxTextRight = right;
      }
    });

    const minCanvasWidth = Math.max(maxTextRight + 100, maxArcX + 100);
    const minCanvasHeight = Math.max(container.scrollHeight, scrollContainer.clientHeight);

    svg.style.width = `${minCanvasWidth}px`;
    svg.style.height = `${minCanvasHeight}px`;

    const spacer = document.createElement('div');
    spacer.className = 'canvas-spacer';
    spacer.style.width = `${minCanvasWidth}px`;
    spacer.style.height = '0px';
    spacer.style.pointerEvents = 'none';
    container.appendChild(spacer);

    arcMetrics.forEach((m, i) => {
      const { arc, colConfig, sourceCoords, targetCoords,
              startX, startY, endX, endY, verticalDistance,
              maxRightSource, maxRightTarget,
              minYSource, maxYSource, minYTarget, maxYTarget } = m;

      const distOffset = Math.max(200, Math.min(600, verticalDistance * 0.65));
      const curveOffset = columnOffsets[i] + distOffset;
      let actualStartX = startX;
      let actualStartY = startY;
      let actualEndX = endX;
      let actualEndY = endY;

      if (sourceCoords.length > 1) {
        const miniArc = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const arcBaseX = maxRightSource + 15;
        const arcApexX = maxRightSource + 27.75;
        const dCurve = `M ${arcBaseX} ${minYSource} C ${maxRightSource + 32} ${minYSource}, ${maxRightSource + 32} ${maxYSource}, ${arcBaseX} ${maxYSource}`;
        miniArc.setAttribute("d", dCurve);
        miniArc.setAttribute("fill", "none");
        miniArc.setAttribute("stroke", colConfig.stroke);
        miniArc.setAttribute("stroke-width", "2.5");
        miniArc.setAttribute("stroke-linecap", "round");
        miniArc.setAttribute("class", "bracket-path");
        svg.appendChild(miniArc);

        sourceCoords.forEach(c => {
          const connector = document.createElementNS("http://www.w3.org/2000/svg", "path");
          const dConnector = `M ${c.right} ${c.centerY} L ${arcBaseX} ${c.centerY}`;
          connector.setAttribute("d", dConnector);
          connector.setAttribute("fill", "none");
          connector.setAttribute("stroke", colConfig.stroke);
          connector.setAttribute("stroke-width", "1");
          connector.setAttribute("stroke-dasharray", "2,2");
          connector.setAttribute("opacity", "0.6");
          connector.setAttribute("class", "bracket-path");
          svg.appendChild(connector);
        });

        actualStartX = arcApexX;
        actualStartY = (minYSource + maxYSource) / 2;
      }

      if (targetCoords.length > 1) {
        const miniArc = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const arcBaseX = maxRightTarget + 15;
        const arcApexX = maxRightTarget + 27.75;
        const dCurve = `M ${arcBaseX} ${minYTarget} C ${maxRightTarget + 32} ${minYTarget}, ${maxRightTarget + 32} ${maxYTarget}, ${arcBaseX} ${maxYTarget}`;
        miniArc.setAttribute("d", dCurve);
        miniArc.setAttribute("fill", "none");
        miniArc.setAttribute("stroke", colConfig.stroke);
        miniArc.setAttribute("stroke-width", "2.5");
        miniArc.setAttribute("stroke-linecap", "round");
        miniArc.setAttribute("class", "bracket-path");
        svg.appendChild(miniArc);

        targetCoords.forEach(c => {
          const connector = document.createElementNS("http://www.w3.org/2000/svg", "path");
          const dConnector = `M ${c.right} ${c.centerY} L ${arcBaseX} ${c.centerY}`;
          connector.setAttribute("d", dConnector);
          connector.setAttribute("fill", "none");
          connector.setAttribute("stroke", colConfig.stroke);
          connector.setAttribute("stroke-width", "1");
          connector.setAttribute("stroke-dasharray", "2,2");
          connector.setAttribute("opacity", "0.6");
          connector.setAttribute("class", "bracket-path");
          svg.appendChild(connector);
        });

        actualEndX = arcApexX;
        actualEndY = (minYTarget + maxYTarget) / 2;
      }

      const controlX1 = Math.max(actualStartX, actualEndX) + curveOffset;
      const controlY1 = actualStartY;
      const controlX2 = Math.max(actualStartX, actualEndX) + curveOffset;
      const controlY2 = actualEndY;
      const pathData = `M ${actualStartX} ${actualStartY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${actualEndX} ${actualEndY}`;

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", pathData);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", colConfig.stroke);
      path.setAttribute("stroke-width", "2.5");
      path.setAttribute("class", "interactive-path hover:stroke-slate-800 transition duration-150");
      path.style.transition = "stroke-width 0.2s, stroke 0.2s";

      const pathLength = path.getTotalLength();
      path.setAttribute("stroke-dasharray", pathLength);
      path.setAttribute("stroke-dashoffset", pathLength);
      requestAnimationFrame(() => {
        path.setAttribute("stroke-dashoffset", "0");
        path.style.transition = "stroke-dashoffset 1.2s ease-out";
      });

      path.onmouseover = () => this._highlightArc(arc, path, colConfig, true);
      path.onmouseout = () => this._highlightArc(arc, path, colConfig, false);

      svg.appendChild(path);

      const labelX = Math.max(actualStartX, actualEndX) + (curveOffset - 12);
      const labelY = (actualStartY + actualEndY) / 2;

      const labelGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      labelGroup.setAttribute("class", "arc-label-group cursor-pointer");

      const labelTextStr = colConfig.label;
      const baseWidth = 24;
      const charWidth = 7;
      const rectWidth = Math.max(baseWidth, labelTextStr.length * charWidth + 12);

      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", labelX - (rectWidth / 2));
      rect.setAttribute("y", labelY - 10);
      rect.setAttribute("width", rectWidth.toString());
      rect.setAttribute("height", "20");
      rect.setAttribute("rx", "10");
      rect.setAttribute("fill", colConfig.bg);
      rect.setAttribute("stroke", colConfig.stroke);
      rect.setAttribute("stroke-width", "1");
      rect.setAttribute("class", "bg-label-rect shadow-sm transition hover:scale-105");

      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", labelX);
      text.setAttribute("y", labelY + 3.5);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("fill", colConfig.text);
      text.setAttribute("font-size", "10px");
      text.setAttribute("font-weight", "bold");
      text.setAttribute("class", "label-text-svg font-sans select-none");
      text.textContent = labelTextStr;

      labelGroup.appendChild(rect);
      labelGroup.appendChild(text);

      labelGroup.onmouseover = () => this._highlightArc(arc, path, colConfig, true);
      labelGroup.onmouseout = () => this._highlightArc(arc, path, colConfig, false);

      labelGroup.onclick = () => {
        const sortedSources = [...arc.sources].map(i => i + 1).sort((a, b) => a - b).join(',');
        const sortedTargets = [...arc.targets].map(i => i + 1).sort((a, b) => a - b).join(',');
        let confirmMsg = this.i18n.confirm_del_arc_msg
          .replace('{relation}', colConfig.label)
          .replace('{src}', sortedSources)
          .replace('{tgt}', sortedTargets);
        this.showCustomConfirm(this.i18n.confirm_del_arc_title, confirmMsg, () => this.deleteArc(arc.id));
      };

      svg.appendChild(labelGroup);

      const sortedSrcNames = [...arc.sources].sort((a, b) => a - b).map(i => i + 1).join(',');
      const sortedTgtNames = [...arc.targets].sort((a, b) => a - b).map(i => i + 1).join(',');

      const listRow = document.createElement('div');
      listRow.className = "flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-lg text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition";
      listRow.innerHTML = `
        <div class="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
          <span class="font-bold text-indigo-600 dark:text-indigo-400">[${sortedSrcNames}]</span>
          <i data-lucide="arrow-right" class="w-3 h-3 text-slate-400 dark:text-slate-500"></i>
          <span class="font-bold text-emerald-600 dark:text-emerald-400">[${sortedTgtNames}]</span>
          <span class="ml-1 px-1.5 py-0.5 rounded font-semibold" style="background-color: ${colConfig.bg}; color: ${colConfig.text}">${colConfig.label}</span>
        </div>
        <button class="del-arc-btn text-slate-400 dark:text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 transition p-1" data-arc-id="${arc.id}">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      `;
      listContainer.appendChild(listRow);
    });

    listContainer.querySelectorAll('.del-arc-btn').forEach(btn => {
      btn.onclick = (e) => {
        const arcId = e.currentTarget.getAttribute('data-arc-id');
        this.showCustomConfirm(
          this.i18n.confirm_del_arc_title,
          this.i18n.confirm_del_arc_generic,
          () => this.deleteArc(arcId)
        );
      };
    });

    if (shouldScrollToNew && this.arcs.length > 0) {
      const lastArc = this.arcs[this.arcs.length - 1];
      const lastArcGroup = svg.querySelector(`.arc-label-group:last-of-type`);
      if (lastArcGroup) {
        const bbox = lastArcGroup.getBoundingClientRect();
        const containerBox = container.getBoundingClientRect();
        const isVisible = (
          bbox.right <= containerBox.right &&
          bbox.left >= containerBox.left &&
          bbox.bottom <= containerBox.bottom &&
          bbox.top >= containerBox.top
        );
        if (!isVisible) {
        scrollContainer.scrollBy({
          left: bbox.right - containerBox.right + 40,
          top: 0,
          behavior: 'smooth'
        });
        }
      }
    }

    if (window.lucide) window.lucide.createIcons();
  }

  _highlightArc(arc, path, colConfig, enable) {
    arc.sources.forEach(sIdx => {
      const el = document.getElementById(`node-${sIdx}`);
      if (el) {
        if (enable) el.classList.add('node-highlight-src');
        else el.classList.remove('node-highlight-src');
      }
    });
    arc.targets.forEach(tIdx => {
      const el = document.getElementById(`node-${tIdx}`);
      if (el) {
        if (enable) el.classList.add('node-highlight-tgt');
        else el.classList.remove('node-highlight-tgt');
      }
    });
    if (enable) {
      path.setAttribute("stroke-width", "4.5");
      path.setAttribute("stroke", "#312e81");
    } else {
      path.setAttribute("stroke-width", "2.5");
      path.setAttribute("stroke", colConfig.stroke);
    }
  }

  debouncedDraw() {
    if (this._debounceTimer) {
      cancelAnimationFrame(this._debounceTimer);
    }
    this._debounceTimer = requestAnimationFrame(() => {
      this.drawAllArcs();
      this._debounceTimer = null;
    });
  }

  toggleGlossaryAccordion() {
    const content = document.getElementById('glossary-content');
    const arrow = document.getElementById('glossary-arrow');
    content.classList.toggle('hidden');
    arrow.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
  }

  showGlossaryDefinition() {
    const selector = document.getElementById('glossary-selector');
    const box = document.getElementById('glossary-definition-box');
    const title = document.getElementById('glossary-title');
    const cat = document.getElementById('glossary-category');
    const text = document.getElementById('glossary-text');

    const val = selector.value;
    if (!val) {
      box.classList.add('hidden');
      return;
    }

    const data = RELATION_DEFINITIONS[val];
    if (data) {
      title.innerText = data.translations[this.currentLang].label;
      cat.innerText = (this.i18n[data.catKey] || data.catKey || '').toString();
      text.innerText = data.translations[this.currentLang].desc;
      box.classList.remove('hidden');
    } else {
      box.classList.add('hidden');
    }
  }

  showCustomConfirm(title, message, onConfirm) {
    document.getElementById('confirm-title').innerText = title;
    document.getElementById('confirm-message').innerText = message;
    document.getElementById('confirm-modal').classList.remove('hidden');
    this.confirmCallback = onConfirm;
    
    setTimeout(() => {
      document.getElementById('confirm-action-btn').focus();
    }, 100);
  }

  closeConfirmModal(confirmed) {
    document.getElementById('confirm-modal').classList.add('hidden');
    if (confirmed && this.confirmCallback) {
      this.confirmCallback();
    }
    this.confirmCallback = null;
  }

  triggerResetConfirmation() {
    this.showCustomConfirm(
      this.i18n.confirm_reset_title,
      this.i18n.confirm_reset_msg,
      () => {
        localStorage.removeItem(this.STORAGE_KEY);
        document.getElementById('bible-input').value = '';
        this.propositions = [];
        this.indentationLevels = [];
        this.arcs = [];
        this.clearSelection();
        this.renderPropositions();
        this.drawAllArcs();
        this.showFeedback(this.i18n.alert_reset_success);
      }
    );
  }

  triggerDeletePropositionConfirmation(index) {
    const msg = this.i18n.confirm_del_row_msg.replace('{num}', index + 1);
    this.showCustomConfirm(
      this.i18n.confirm_del_row_title,
      msg,
      () => {
        this.propositions.splice(index, 1);
        this.indentationLevels.splice(index, 1);

        this.arcs = this.arcs.map(arc => {
          const newSources = arc.sources.filter(s => s !== index).map(s => (s > index ? s - 1 : s));
          const newTargets = arc.targets.filter(t => t !== index).map(t => (t > index ? t - 1 : t));
          return { ...arc, sources: newSources, targets: newTargets };
        }).filter(arc => arc.sources.length > 0 && arc.targets.length > 0);

        this.selectedSources = this.selectedSources.filter(s => s !== index).map(s => (s > index ? s - 1 : s));
        this.selectedTargets = this.selectedTargets.filter(t => t !== index).map(t => (t > index ? t - 1 : t));

        this.renderPropositions();
        this.drawAllArcs();
        this.saveToStorage();
      }
    );
  }

  toggleHelpModal() {
    const modal = document.getElementById('help-modal');
    modal.classList.toggle('hidden');
    
    if (!modal.classList.contains('hidden')) {
      const closeBtn = modal.querySelector('.help-close-btn');
      if (closeBtn) setTimeout(() => closeBtn.focus(), 100);
      
      const escapeHandler = (e) => {
        if (e.key === 'Escape') {
          modal.classList.add('hidden');
          document.removeEventListener('keydown', escapeHandler);
        }
      };
      document.addEventListener('keydown', escapeHandler);
    }
  }

  toggleAboutModal() {
    const modal = document.getElementById('about-modal');
    modal.classList.toggle('hidden');
    
    if (!modal.classList.contains('hidden')) {
      const closeBtn = modal.querySelector('.about-close-btn');
      if (closeBtn) setTimeout(() => closeBtn.focus(), 100);
      
      const escapeHandler = (e) => {
        if (e.key === 'Escape') {
          modal.classList.add('hidden');
          document.removeEventListener('keydown', escapeHandler);
        }
      };
      document.addEventListener('keydown', escapeHandler);
    }
  }

  showFeedback(message) {
    const toast = document.createElement('div');
    toast.className = "fixed bottom-5 right-5 bg-slate-800 text-white text-sm px-4 py-2.5 rounded-lg shadow-lg z-50 flex items-center gap-2 animate-bounce";
    toast.innerHTML = `<i data-lucide="info" class="w-4 h-4 text-indigo-400"></i> ${message}`;
    document.body.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();
    setTimeout(() => { toast.remove(); }, 3000);
  }
}

let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new BiblearcApp();
});