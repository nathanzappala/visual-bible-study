/**
 * Visual Bible Study - Relazioni Logiche
 * Definizioni delle relazioni logiche con traduzioni e configurazioni colore
 */

const RELATION_DEFINITIONS = {
  // Coordinate
  "Serie (S)": {
    catKey: "cat_coord",
    abbr: "S",
    translations: {
      it: { label: "Serie (S)", desc: "Elementi, idee o eventi sono elencati affiancati per formare un insieme combinato, senza subordinazione o precedenza reciproca." },
      en: { label: "Series (S)", desc: "Items, ideas, or events are listed side-by-side to make a combined whole, without subordinating or prioritizing one over the other." }
    }
  },
  "Progressione (P)": {
    catKey: "cat_coord",
    abbr: "P",
    translations: {
      it: { label: "Progressione (P)", desc: "Passaggi logici o temporali successivi che conducono verso un culmine o climax narrativo." },
      en: { label: "Progression (P)", desc: "Successive logical or chronological steps leading toward a climax." }
    }
  },
  "Alternativa (Alt)": {
    catKey: "cat_coord",
    abbr: "Alt",
    translations: {
      it: { label: "Alternativa (Alt)", desc: "Due proposizioni presentate come opzioni distinte, mutuamente esclusive o visioni contrapposte." },
      en: { label: "Alternative (Alt)", desc: "Two propositions presented as distinct options or opposing views." }
    }
  },
  // Subordinate
  "Base/Causa (G)": {
    catKey: "cat_sub",
    abbr: "G",
    translations: {
      it: { label: "Base/Causa (G)", desc: "Fornisce la ragione logica, il motivo o la base fondante di un'affermazione principale." },
      en: { label: "Ground (G)", desc: "Provides the logical reason, motive, or foundation for a main statement." }
    }
  },
  "Inferenza (Inf)": {
    catKey: "cat_sub",
    abbr: "Inf",
    translations: {
      it: { label: "Inferenza (Inf)", desc: "Trae una conclusione o conseguenza logica da un'affermazione espressa in precedenza." },
      en: { label: "Inference (Inf)", desc: "Draws a logical conclusion or consequence from a previous statement." }
    }
  },
  "Azione-Risultato (A-R)": {
    catKey: "cat_sub",
    abbr: "A-R",
    translations: {
      it: { label: "Azione-Risultato (A-R)", desc: "Indica un'azione specifica e la conseguenza diretta o il risultato che ne deriva." },
      en: { label: "Action-Result (A-R)", desc: "States an action and its direct resulting consequence or outcome." }
    }
  },
  "Mezzo (M)": {
    catKey: "cat_sub",
    abbr: "M",
    translations: {
      it: { label: "Mezzo (M)", desc: "Spiega lo strumento o la modalità pratica con cui viene compiuta o facilitata un'azione." },
      en: { label: "Means (M)", desc: "Explains the practical mechanism, instrument, or way in which an action is accomplished." }
    }
  },
  "Idea-Spiegazione (Id/Exp)": {
    catKey: "cat_sub",
    abbr: "Id/Exp",
    translations: {
      it: { label: "Idea-Spiegazione (Id/Exp)", desc: "Chiarisce, approfondisce o definisce in dettaglio il significato di un'affermazione originale." },
      en: { label: "Idea-Explanation (Id/Exp)", desc: "Clarifies, deepens, or defines in detail the meaning of an original statement." }
    }
  },
  "Confronto (Cf)": {
    catKey: "cat_sub",
    abbr: "Cf",
    translations: {
      it: { label: "Confronto (Cf)", desc: "Mostra la somiglianza o l'analogia tra due azioni, concetti o situazioni." },
      en: { label: "Comparison (Cf)", desc: "Shows similarity or analogy between actions, concepts, or situations." }
    }
  },
  "Domanda-Risposta (D/R)": {
    catKey: "cat_sub",
    abbr: "D/R",
    translations: {
      it: { label: "Domanda-Risposta (D/R)", desc: "Presenta una domanda esplicita posta nel testo seguita immediatamente dalla sua risposta." },
      en: { label: "Question-Answer (Q/A)", desc: "An explicit question followed immediately by its answer." }
    }
  },
  "Scopo (Purp)": {
    catKey: "cat_sub",
    abbr: "Purp",
    translations: {
      it: { label: "Scopo (Purp)", desc: "Rappresenta l'obiettivo, l'intenzione o il fine deliberato dietro l'azione descritta." },
      en: { label: "Purpose (Purp)", desc: "Represents the objective, intention, or deliberate goal behind the action described." }
    }
  },
  "Condizione (Cond)": {
    catKey: "cat_sub",
    abbr: "Cond",
    translations: {
      it: { label: "Condizione (Cond)", desc: "Definisce uno scenario ipotetico basato su un presupposto (costruzione del tipo 'se-allora')." },
      en: { label: "Condition (Cond)", desc: "Defines a hypothetical scenario based on a premise (an 'if-then' construct)." }
    }
  },
  "Negativo-Positivo (+/-)": {
    catKey: "cat_sub",
    abbr: "+/-",
    translations: {
      it: { label: "Negativo-Positivo (+/-)", desc: "Nega un'affermazione o un concetto per dare massima forza ed enfasi al suo opposto positivo." },
      en: { label: "Negative-Positive (+/-)", desc: "Denies one statement or concept to give maximum force and emphasis to its positive opposite." }
    }
  },
  "Concessiva (Csv)": {
    catKey: "cat_sub",
    abbr: "Csv",
    translations: {
      it: { label: "Concessiva (Csv)", desc: "Introduce un punto che rimane pienamente valido nonostante un'affermazione contraria o un ostacolo." },
      en: { label: "Concessive (Csv)", desc: "Introduces a point that remains fully valid despite a contrary or opposing statement." }
    }
  },
  // Estese
  "Attenzione (Att)": {
    catKey: "cat_ext",
    abbr: "Att",
    translations: {
      it: { label: "Attenzione (Att)", desc: "Un richiamo letterario esplicito per focalizzare l'attenzione su una dichiarazione cruciale (spesso introdotta da 'Ecco!')." },
      en: { label: "Attention (Att)", desc: "An explicit literary call to focus attention on an upcoming critical statement (often introduced by 'behold' or 'look')." }
    }
  },
  "Avvertimento (W)": {
    catKey: "cat_ext",
    abbr: "W",
    translations: {
      it: { label: "Avvertimento (W)", desc: "Un ammonimento specifico, un avviso di cautela o l'introduzione di un pericolo imminente nel testo." },
      en: { label: "Warning (W)", desc: "A specific warning, caution, or introduction of an imminent danger in the text." }
    }
  },
  "Parentetica (Par)": {
    catKey: "cat_ext",
    abbr: "Par",
    translations: {
      it: { label: "Parentetica (Par)", desc: "Un inciso o un'interruzione chiarificatrice che esce temporaneamente dal flusso logico principale." },
      en: { label: "Parenthetical (Par)", desc: "An aside or clarifying interruption that temporarily leaves the main logical flow." }
    }
  },
  "Esortativa (Hort)": {
    catKey: "cat_ext",
    abbr: "Hort",
    translations: {
      it: { label: "Esortativa (Hort)", desc: "Un'esortazione, un incoraggiamento morale o un comando diretto all'azione immediata." },
      en: { label: "Hortatory (Hort)", desc: "An exhortation, moral encouragement, or direct command to immediate action." }
    }
  }
};

/**
 * Ottiene la configurazione colore/etichetta per una relazione
 * @param {string} relationKey - Chiave della relazione
 * @param {boolean} [isDark=false] - Se true restituisce colori per sfondo scuro
 * @returns {{ stroke: string, bg: string, text: string, label: string }}
 */
function getRelationConfig(relationKey, isDark = false) {
  const def = RELATION_DEFINITIONS[relationKey];
  const displayLabel = def ? def.abbr : relationKey;

  if (def) {
    const cat = def.catKey;
    if (cat === "cat_coord") {
      if (isDark) {
        return { stroke: "#60a5fa", bg: "#1e3a5f", text: "#93c5fd", label: displayLabel };
      }
      return { stroke: "#3b82f6", bg: "#dbeafe", text: "#1e40af", label: displayLabel };
    } else if (cat === "cat_sub") {
      if (isDark) {
        return { stroke: "#a78bfa", bg: "#2e1f5e", text: "#c4b5fd", label: displayLabel };
      }
      return { stroke: "#8b5cf6", bg: "#ede9fe", text: "#5b21b6", label: displayLabel };
    } else {
      if (isDark) {
        return { stroke: "#fbbf24", bg: "#3b2f00", text: "#fde68a", label: displayLabel };
      }
      return { stroke: "#f59e0b", bg: "#fef3c7", text: "#b45309", label: displayLabel };
    }
  }
  // Default per relazioni personalizzate
  if (isDark) {
    return { stroke: "#34d399", bg: "#064e3b", text: "#6ee7b7", label: displayLabel };
  }
  return { stroke: "#10b981", bg: "#d1fae5", text: "#065f46", label: displayLabel };
}
