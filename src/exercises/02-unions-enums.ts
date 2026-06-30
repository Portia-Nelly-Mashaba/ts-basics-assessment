/* ============================================================
 * EXERCISE 2 — Unions, Literals, Enums & Narrowing
 * ============================================================
 *
 * Concepts: literal unions, enums, narrowing a union with a type
 * guard, and a narrowing problem where `typeof` is NOT enough.
 *
 * Fix every `// TODO`. No `any`. Run `npm run typecheck`.
 * ============================================================ */

/* ---- 2a. Literal union ---- */

// TODO: union of "pending" | "graded" | "late"
export type SubmissionStatus = ___;
export const ok: SubmissionStatus = "graded";

// @ts-expect-error "missing" is not a valid SubmissionStatus
export const bad: SubmissionStatus = "missing";

/* ---- 2b. Enum ----
 * Declare `enum Grade { A, B, C, D, F }`. Replace the placeholder. */

// TODO: declare the real enum (delete PLACEHOLDER)
export enum Grade {
  PLACEHOLDER,
}
export const passingGrade: Grade = Grade.B;

/* ---- 2c. Narrowing a primitive union ----
 * `formatId` takes number | string.
 *   - number -> pad to "STU-0001"
 *   - string -> uppercase, unchanged otherwise
 * Narrow with `typeof`. */

const pad = (n: number): string => "STU-" + n.toString().padStart(4, "0");

// TODO: param union type, return type, and narrowing in the body
export function formatId(id: ___): ___ {
  // TODO
}

/* ---- 2d. Narrowing where typeof is NOT enough ----
 * A grade entry is either a raw mark or an already-letter grade:
 *
 *   type Mark   = { kind: "mark";   value: number }   // 0..100
 *   type Letter = { kind: "letter"; value: "A"|"B"|"C"|"D"|"F" }
 *   type Entry  = Mark | Letter
 *
 * Both have a `value`, so you CANNOT narrow on `typeof entry.value`
 * alone reliably — narrow on the `kind` discriminant instead.
 *
 * `toLetter` must return the letter grade:
 *   - if entry is already a Letter, return its value
 *   - if entry is a Mark: >=75 A, >=70 B, >=60 C, >=50 D, else F
 */

// TODO: define Mark, Letter, Entry
export type Mark = ___;
export type Letter = ___;
export type Entry = ___;

// TODO: implement using discriminant narrowing on `kind`
export function toLetter(entry: Entry): "A" | "B" | "C" | "D" | "F" {
  // TODO
}
