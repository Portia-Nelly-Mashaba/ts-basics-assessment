/* ============================================================
 * EXERCISE 5 — Classes: modifiers, inheritance, abstract,
 *              implements, getters
 * ============================================================
 *
 * Concepts: access modifiers (public/private/protected/readonly),
 * an interface a class `implements`, `abstract` base + subclass,
 * and a typed getter. No `any`. Run `npm run typecheck`.
 * ============================================================ */

/* ---- 5a. Interface a class must implement ----
 * `Averageable` requires an `average(): number` method. */

// TODO: declare the interface with an average(): number method
export interface Averageable {
  // TODO
}

/* ---- 5b. Abstract base ----
 * `Assessment` is abstract. It holds a PROTECTED `scores: number[]`
 * (so subclasses can read it, outsiders cannot) and a public
 * readonly `title`. It declares an ABSTRACT method
 * `weight(): number` that subclasses must implement. It provides a
 * concrete `total(): number` = sum of scores. */

export abstract class Assessment implements Averageable {
  // TODO: public readonly title: string
  // TODO: protected scores: number[]

  // TODO: constructor(title: string, scores: number[])
  constructor(title: ___, scores: ___) {
    // TODO: assign both
  }

  // TODO: abstract weight(): number  (no body)

  total(): number {
    return this.scores.reduce((s, n) => s + n, 0);
  }

  // TODO: implement average(): number from Averageable (0 if empty)
  average(): number {
    // TODO
  }
}

/* ---- 5c. Concrete subclass ----
 * `Exam` extends Assessment with a fixed weight of 0.6.
 * It exposes a getter `weighted` = average() * weight(). */

export class Exam extends Assessment {
  // TODO: implement weight() returning 0.6

  // TODO: getter `weighted` returning a number
  get weighted(): ___ {
    // TODO
  }
}

/* ---- 5d. Prove encapsulation ---- */

export const midterm = new Exam("Midterm", [70, 90]);
midterm.average(); // 80

// @ts-expect-error 'scores' is protected and not accessible here
console.log(midterm.scores);

// @ts-expect-error cannot assign to readonly 'title'
midterm.title = "Changed";
