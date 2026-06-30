/* ============================================================
 * EXERCISE 6 — TypeScript in React
 * ============================================================
 *
 * Concepts: typed props, a UNION prop type, children, and a typed
 * event handler prop. No `any`. App must typecheck and run.
 * ============================================================ */

import type { ReactNode } from "react";

/* ---- 6a. Props with a union + optional + callback ----
 * <StudentCard /> receives:
 *   - name:     string
 *   - mark:     number
 *   - status:   "active" | "graduated"
 *   - note?:    optional string
 *   - onSelect: a function taking the student's name (string) and
 *               returning void   (i.e. (name: string) => void)
 */

// TODO: complete the props type
type StudentCardProps = {
  // TODO
};

// TODO: annotate props
export function StudentCard(props: ___) {
  const { name, mark, status, note, onSelect } = props;
  return (
    <div
      onClick={() => onSelect(name)}
      style={{ border: "1px solid #ccc", borderRadius: 8, padding: 12, margin: 8, cursor: "pointer" }}
    >
      <h3>{name}</h3>
      <p>Mark: {mark}</p>
      <p>Status: {status}</p>
      {note ? <p><em>{note}</em></p> : null}
    </div>
  );
}

/* ---- 6b. A component that accepts children ----
 * <Panel> wraps content. Props: `heading: string` and
 * `children: ReactNode`. Type it. */

// TODO: heading:string, children:ReactNode
type PanelProps = {
  // TODO
};

// TODO: annotate props
export function Panel(props: ___) {
  return (
    <section style={{ padding: 16 }}>
      <h2>{props.heading}</h2>
      {props.children}
    </section>
  );
}
