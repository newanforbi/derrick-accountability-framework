import { useState } from "react";

const VECTORS = [
  {
    id: 1,
    title: "Civil Litigation Escalation",
    icon: "⚖️",
    color: "#E63946",
    accent: "#FF6B6B",
    status: "ACTIVE",
    summary: "Federal §1983 lawsuit + Bane/Ralph Act expansion",
    targets: ["Agent A. Derrick", "Sup. G. Noguchi", "Katie Palacios"],
    actions: [
      { label: "Ex Parte Motion — Evidence Spoliation", detail: "Preserve Jan 21, 2026 surveillance footage from HOPE facility. FRCP 26(d)(1) expedited discovery. Spoliation sanctions under FRCP 37(e) if footage destroyed.", priority: "CRITICAL", done: true },
      { label: "Amend Complaint — Bane Act (Civ. Code §52.1)", detail: "Coercion/intimidation claims bypassing federal immunities. Covers verbal threats linking speech to parole consequences, revocation of grace period, retaliatory supervision escalation.", priority: "HIGH", done: false },
      { label: "Amend Complaint — Ralph Act (Civ. Code §51.7)", detail: "Violence/threats based on protected characteristics. Comparator Beard testimony: ‘should be lined up and shot.’ Triggers statutory + punitive damages.", priority: "HIGH", done: false },
      { label: "Supervisory Liability — Noguchi", detail: "Starr v. Baca, 652 F.3d 1202. Noguchi present at CTM, denied agent reassignment request, signed heightened restrictions. Precludes ‘rogue agent’ defense.", priority: "HIGH", done: false },
      { label: "CRD Administrative Complaint", detail: "California Civil Rights Department portal filing. Parallel investigation creates discoverable evidence repository. 1-year SOL for non-employment claims.", priority: "MEDIUM", done: false },
    ],
    caseRef: "2:26-cv-00004-DJC-JDP",
    court: "E.D. Cal."
  },
  {
    id: 2,
    title: "Administrative Prosecution",
    icon: "🏛️",
    color: "#457B9D",
    accent: "#7FB3D3",
    status: "PENDING",
    summary: "State Personnel Board RTFC — bypass CDCR chain of command",
    targets: ["Agent A. Derrick"],
    actions: [
      { label: "SPB Form 101 — Request to File Charges", detail: "Gov. Code §19583.5 empowers any citizen to request disciplinary action. Filed with SPB Appeals Division, Sacramento. Sworn statement under penalty of perjury.", priority: "CRITICAL", done: false },
      { label: "Sworn Narrative (15-page limit)", detail: "Cal. Code Regs. tit. 2, §52.7. Double-spaced, 15 pages max excluding exhibits. Must state facts constituting cause for adverse action under Gov. Code §19572.", priority: "HIGH", done: false },
      { label: "Attach Supporting Declarations", detail: "Declarations of Damon Huybers, Michael Beard, and Jack Scott. SPB may require affidavits from persons with actual knowledge before acting.", priority: "HIGH", done: false },
      { label: "Service on CDCR (Appointing Authority)", detail: "Conforming copies must be served on CDCR. Employee has 30 days to answer after charges approved.", priority: "MEDIUM", done: false },
      { label: "Evidentiary Hearing before ALJ", detail: "Citizen acts as prosecutor. Subpoena power. Sworn testimony creates impeachment record for federal case and criminal prosecutions.", priority: "HIGH", done: false },
    ],
    caseRef: "Gov. Code §19583.5",
    court: "SPB Appeals Div."
  },
  {
    id: 3,
    title: "State Criminal Referrals",
    icon: "🔴",
    color: "#9B2226",
    accent: "#CA6F72",
    status: "PENDING",
    summary: "DA Public Integrity Unit + Brady List placement",
    targets: ["Agent A. Derrick"],
    actions: [
      { label: "PC §136.1 — Witness Intimidation", detail: "Damon Huybers stated Derrick contacted him re: litigation. Huybers refused to sign declaration. Wobbler: up to 4 years prison + lifetime firearm ban.", priority: "CRITICAL", done: false },
      { label: "PC §118.1 — False Police Report", detail: "Jack Scott declaration: fabricated ‘loitering and stalking’ charges near school. Scott served 45-60 days. Wobbler: up to 3 years prison.", priority: "CRITICAL", done: false },
      { label: "Submit to SJ County DA Public Integrity Unit", detail: "Special Operations Division. Include federal FAC, ex parte motion, all sworn declarations. Direct to Bureau of Investigations.", priority: "HIGH", done: false },
      { label: "Brady List Placement", detail: "Brady v. Maryland (1963). DA obligated to track officers with dishonesty/falsification history. Inclusion renders agent unable to testify — functional decertification.", priority: "CRITICAL", done: false },
    ],
    caseRef: "PC §§136.1, 118.1",
    court: "SJ County DA"
  },
  {
    id: 4,
    title: "Federal Criminal Referrals",
    icon: "🦅",
    color: "#1D3557",
    accent: "#4A7FB5",
    status: "PENDING",
    summary: "FBI / DOJ Civil Rights Division investigation",
    targets: ["Agent A. Derrick", "Katie Palacios"],
    actions: [
      { label: "18 U.S.C. §1512 — Federal Witness Tampering", detail: "Corruptly persuading Huybers to withhold declaration in federal proceeding. Up to 20 years federal prison. File with USAO E.D. Cal. (Sacramento).", priority: "CRITICAL", done: false },
      { label: "18 U.S.C. §242 — Deprivation of Rights Under Color of Law", detail: "Willful deprivation of First Amendment rights while acting as state agent. ‘You do not have freedom of speech.’ Up to 10 years.", priority: "HIGH", done: false },
      { label: "18 U.S.C. §241 — Conspiracy Against Rights", detail: "Derrick + Palacios coordinated to revoke grace period and deny employment accommodation in retaliation. Up to 10 years.", priority: "HIGH", done: false },
      { label: "File with FBI Sacramento Field Office", detail: "Submit comprehensive civil rights complaint package with all federal filings and declarations.", priority: "HIGH", done: false },
      { label: "File with DOJ Civil Rights Division", detail: "Online reporting portal submission. Forward copies to local FBI field office.", priority: "MEDIUM", done: false },
    ],
    caseRef: "18 U.S.C. §§241, 242, 1512",
    court: "USAO E.D. Cal."
  },
  {
    id: 5,
    title: "Disarmament Strategy",
    icon: "🛡️",
    color: "#6A040F",
    accent: "#A4363A",
    status: "STRATEGIC",
    summary: "Civil restraining order → mandatory firearm surrender → field duty suspension",
    targets: ["Agent A. Derrick"],
    actions: [
      { label: "Petition for CHRO (CCP §527.6)", detail: "Civil Harassment Restraining Order. Beard testimony: ‘should be lined up and shot.’ Plaintiff reports hypervigilance, shaking during home visits. File in SJ County Superior Court.", priority: "HIGH", done: false },
      { label: "Trigger Firearm Relinquishment", detail: "PC §29825 + 18 U.S.C. §922(g)(8): TRO → 24-hour firearm surrender. Agent cannot possess, own, or control any firearms or ammunition.", priority: "CRITICAL", done: false },
      { label: "Employment Consequence", detail: "PC §830.5 requires CDCR agents to carry firearms for field duty. Without firearm privileges → unpaid leave, desk duty, or termination.", priority: "HIGH", done: false },
      { label: "Force Psych Evaluation", detail: "Evidence Code §730. Officer must petition for duty weapon exemption under CCP §527.9(f) — triggers mandatory psychological evaluation and IA notification.", priority: "MEDIUM", done: false },
    ],
    caseRef: "CCP §527.6",
    court: "SJ County Sup. Ct."
  },
  {
    id: 6,
    title: "Systemic Oversight",
    icon: "🔍",
    color: "#2D6A4F",
    accent: "#52B788",
    status: "SUPPLEMENTAL",
    summary: "State Auditor whistleblower complaint + Civil Grand Jury investigation",
    targets: ["Stockton Parole Office", "HOPE Program", "CDCR"],
    actions: [
      { label: "CA State Auditor — Whistleblower Complaint", detail: "Improper governmental activities: abuse of authority, waste of state resources. Forced resignation from $20/hr FedEx job contradicts CDCR rehabilitative mission.", priority: "MEDIUM", done: false },
      { label: "CDCR OIA — Form 602-1 Grievance", detail: "Standard administrative remedy for parolees. CST reviews for staff misconduct allegations (retaliation, Equal Protection, witness intimidation).", priority: "HIGH", done: false },
      { label: "CDCR — Form 2142 Citizen’s Complaint", detail: "PC §832.5 mandated complaint procedure. Attach federal FAC + declarations. 5-year retention (no finding) / 15-year retention (substantiated).", priority: "HIGH", done: false },
      { label: "OIG Complaint", detail: "Independent oversight of CDCR OIA. Request monitoring of OIA investigation. Highlight witness tampering and evidence spoliation.", priority: "MEDIUM", done: false },
      { label: "SJ County Civil Grand Jury Complaint", detail: "Confidential complaint form. Investigate HOPE Program operations, attendance enforcement, complicity in civil rights violations. Public report potential.", priority: "MEDIUM", done: false },
    ],
    caseRef: "Multiple",
    court: "Various"
  }
];

const CONNECTIONS = [
  { from: 1, to: 3, label: "Evidence feeds criminal referrals" },
  { from: 1, to: 4, label: "Ex parte motion → federal witness tampering" },
  { from: 2, to: 1, label: "SPB testimony impeaches in federal case" },
  { from: 3, to: 5, label: "Felony conviction → firearm ban" },
  { from: 5, to: 3, label: "CHRO triggers IA investigation" },
  { from: 6, to: 2, label: "OIG findings support SPB charges" },
];

const SB2_LOOPHOLE = {
  title: "The SB 2 Decertification Paradox",
  problem: "Senate Bill 2 (Kenneth Ross Jr. Act) grants POST authority to decertify peace officers for serious misconduct — but explicitly excludes CDCR parole agents under PC §830.5.",
  solution: "This framework deploys six parallel vectors to achieve functional decertification through alternative mechanisms: Brady list placement, firearm disarmament, SPB prosecution, and criminal referrals.",
  quote: "CDCR, parole officers, probation officers, and reserve officers from non-POST participating agencies are not subject to SB 2"
};

const PENALTY_TABLE = [
  { statute: "PC §136.1", offense: "Witness Intimidation", nexus: "Contacting Huybers re: litigation", penalty: "4 yrs prison + firearm ban" },
  { statute: "PC §118.1", offense: "False Police Report", nexus: "Fabricated charges — Jack Scott", penalty: "3 yrs prison" },
  { statute: "18 U.S.C. §1512", offense: "Federal Witness Tampering", nexus: "Persuading Huybers to withhold declaration", penalty: "Up to 20 yrs federal" },
  { statute: "18 U.S.C. §241", offense: "Conspiracy Against Rights", nexus: "Derrick + Palacios coordination", penalty: "Up to 10 yrs federal" },
  { statute: "18 U.S.C. §242", offense: "Color of Law Violations", nexus: "Suppressing 1st Amendment speech", penalty: "Up to 10 yrs federal" },
];

function PriorityBadge({ priority }) {
  const colors = {
    CRITICAL: { bg: "rgba(230,57,70,0.15)", text: "#E63946", border: "#E63946" },
    HIGH: { bg: "rgba(255,183,3,0.12)", text: "#E9A100", border: "#FFB703" },
    MEDIUM: { bg: "rgba(82,183,136,0.12)", text: "#2D6A4F", border: "#52B788" },
  };
  const c = colors[priority] || colors.MEDIUM;
  return (
    <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", padding: "2px 8px", borderRadius: 3, background: c.bg, color: c.text, border: `1px solid ${c.border}`, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
      {priority}
    </span>
  );
}

function StatusBadge({ status }) {
  const colors = {
    ACTIVE: "#E63946",
    PENDING: "#FFB703",
    STRATEGIC: "#457B9D",
    SUPPLEMENTAL: "#52B788",
  };
  return (
    <span style={{ fontSize: 9, fontFamily: "'JetBrains Mono', monospace", padding: "3px 10px", borderRadius: 2, background: colors[status] || "#666", color: "#fff", fontWeight: 700, letterSpacing: 1.5 }}>
      {status}
    </span>
  );
}

function VectorCard({ vector, isExpanded, onToggle, onToggleAction }) {
  const totalActions = vector.actions.length;
  const completedActions = vector.actions.filter(a => a.done).length;
  const progress = totalActions > 0 ? (completedActions / totalActions) * 100 : 0;

  return (
    <div
      style={{
        background: "rgba(15,15,20,0.85)",
        border: `1px solid ${isExpanded ? vector.color : "rgba(255,255,255,0.08)"}`,
        borderRadius: 6,
        marginBottom: 12,
        overflow: "hidden",
        transition: "all 0.3s ease",
        boxShadow: isExpanded ? `0 0 30px ${vector.color}22, inset 0 1px 0 rgba(255,255,255,0.05)` : "0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      <div
        onClick={onToggle}
        style={{
          padding: "16px 20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 14,
          userSelect: "none",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", bottom: 0, left: 0, width: `${progress}%`, height: 2, background: `linear-gradient(90deg, ${vector.color}, ${vector.accent})`, transition: "width 0.5s ease" }} />
        <span style={{ fontSize: 22 }}>{vector.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 17, color: "#F1FAEE", fontWeight: 400 }}>
              Vector {vector.id}: {vector.title}
            </span>
            <StatusBadge status={vector.status} />
          </div>
          <div style={{ fontSize: 12, color: "rgba(241,250,238,0.5)", fontFamily: "'JetBrains Mono', monospace" }}>
            {vector.caseRef} — {vector.court}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 11, color: "rgba(241,250,238,0.4)", fontFamily: "'JetBrains Mono', monospace" }}>
            {completedActions}/{totalActions}
          </div>
        </div>
        <span style={{ color: vector.color, fontSize: 18, transition: "transform 0.3s", transform: isExpanded ? "rotate(90deg)" : "rotate(0)" }}>›</span>
      </div>

      {isExpanded && (
        <div style={{ padding: "0 20px 16px", animation: "fadeIn 0.3s ease" }}>
          <p style={{ fontSize: 13, color: "rgba(241,250,238,0.6)", margin: "0 0 8px", lineHeight: 1.5, fontStyle: "italic" }}>
            {vector.summary}
          </p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
            {vector.targets.map((t, i) => (
              <span key={i} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 3, background: `${vector.color}22`, color: vector.accent, border: `1px solid ${vector.color}44`, fontFamily: "'JetBrains Mono', monospace" }}>
                {t}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {vector.actions.map((action, idx) => (
              <ActionItem key={idx} action={action} color={vector.color} accent={vector.accent} vectorId={vector.id} idx={idx} onToggle={onToggleAction} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ActionItem({ action, color, accent, vectorId, idx, onToggle }) {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div style={{ background: action.done ? "rgba(45,106,79,0.1)" : "rgba(255,255,255,0.02)", borderRadius: 4, border: `1px solid ${action.done ? "rgba(82,183,136,0.3)" : "rgba(255,255,255,0.04)"}`, overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", cursor: "pointer" }} onClick={() => setShowDetail(!showDetail)}>
        <div
          onClick={(e) => { e.stopPropagation(); onToggle(vectorId, idx); }}
          style={{
            width: 16, height: 16, borderRadius: 3, flexShrink: 0,
            border: action.done ? "none" : `1.5px solid ${color}88`,
            background: action.done ? "#2D6A4F" : "transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", transition: "all 0.2s"
          }}
        >
          {action.done && <span style={{ color: "#fff", fontSize: 11, lineHeight: 1 }}>✓</span>}
        </div>
        <span style={{ flex: 1, fontSize: 13, color: action.done ? "rgba(241,250,238,0.4)" : "#F1FAEE", textDecoration: action.done ? "line-through" : "none", fontFamily: "'JetBrains Mono', monospace", fontWeight: 400 }}>
          {action.label}
        </span>
        <PriorityBadge priority={action.priority} />
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 14, transform: showDetail ? "rotate(90deg)" : "rotate(0)", transition: "transform 0.2s" }}>›</span>
      </div>
      {showDetail && (
        <div style={{ padding: "0 12px 10px 38px", fontSize: 12, color: "rgba(241,250,238,0.5)", lineHeight: 1.6 }}>
          {action.detail}
        </div>
      )}
    </div>
  );
}

const NODE_POSITIONS = {
  1: { x: 120, y: 90 },
  2: { x: 350, y: 90 },
  3: { x: 580, y: 90 },
  4: { x: 120, y: 270 },
  5: { x: 350, y: 270 },
  6: { x: 580, y: 270 },
};

function ConnectionDiagram() {
  const [hoveredEdge, setHoveredEdge] = useState(null);
  const R = 38;

  return (
    <div style={{ background: "rgba(15,15,20,0.85)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: 20, marginBottom: 12 }}>
      <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 16, color: "#F1FAEE", margin: "0 0 16px", fontWeight: 400 }}>
        Strategic Interconnections
      </h3>
      <svg viewBox="0 0 700 360" width="100%" style={{ display: "block", overflow: "visible" }}>
        <defs>
          {VECTORS.map(v => (
            <marker key={v.id} id={`arrow-${v.id}`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill={v.color} opacity="0.7" />
            </marker>
          ))}
        </defs>

        {/* Edges */}
        {CONNECTIONS.map((c, i) => {
          const from = NODE_POSITIONS[c.from];
          const to   = NODE_POSITIONS[c.to];
          const dx = to.x - from.x;
          const dy = to.y - from.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const ux = dx / dist;
          const uy = dy / dist;
          const x1 = from.x + ux * R;
          const y1 = from.y + uy * R;
          const x2 = to.x   - ux * (R + 6);
          const y2 = to.y   - uy * (R + 6);
          const mx = (x1 + x2) / 2 - uy * 40;
          const my = (y1 + y2) / 2 + ux * 40;
          const color = VECTORS[c.from - 1].color;
          const isHovered = hoveredEdge === i;
          return (
            <g key={i} onMouseEnter={() => setHoveredEdge(i)} onMouseLeave={() => setHoveredEdge(null)} style={{ cursor: "default" }}>
              <path
                d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
                fill="none"
                stroke={color}
                strokeWidth={isHovered ? 2 : 1.2}
                strokeOpacity={isHovered ? 0.9 : 0.4}
                markerEnd={`url(#arrow-${c.from})`}
                style={{ transition: "stroke-opacity 0.2s, stroke-width 0.2s" }}
              />
              {isHovered && (
                <text
                  x={(x1 + x2) / 2 - uy * 52}
                  y={(y1 + y2) / 2 + ux * 52}
                  textAnchor="middle"
                  fontSize="9"
                  fontFamily="'JetBrains Mono', monospace"
                  fill="rgba(241,250,238,0.7)"
                >
                  {c.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {VECTORS.map(v => {
          const { x, y } = NODE_POSITIONS[v.id];
          return (
            <g key={v.id}>
              <circle cx={x} cy={y} r={R} fill={v.color} fillOpacity="0.15" stroke={v.color} strokeWidth="1.5" strokeOpacity="0.6" />
              <text x={x} y={y - 10} textAnchor="middle" fontSize="18" dominantBaseline="middle">{v.icon}</text>
              <text x={x} y={y + 12} textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="'JetBrains Mono', monospace" fill="#F1FAEE" fillOpacity="0.9">{v.id}</text>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 14 }}>
        {VECTORS.map(v => (
          <div key={v.id} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "rgba(241,250,238,0.5)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: v.color, display: "inline-block", flexShrink: 0 }} />
            {v.id}. {v.title}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 8, fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "rgba(241,250,238,0.25)", fontStyle: "italic" }}>
        Hover over edges to see connection labels
      </div>
    </div>
  );
}

function PenaltyTable() {
  return (
    <div style={{ background: "rgba(15,15,20,0.85)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: 20, marginBottom: 12, overflowX: "auto" }}>
      <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 16, color: "#F1FAEE", margin: "0 0 14px", fontWeight: 400 }}>
        Criminal Exposure Matrix
      </h3>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>
        <thead>
          <tr>
            {["Statute", "Offense", "Factual Nexus", "Max Penalty"].map(h => (
              <th key={h} style={{ textAlign: "left", padding: "8px 10px", color: "rgba(241,250,238,0.4)", borderBottom: "1px solid rgba(255,255,255,0.1)", fontWeight: 600, fontSize: 10, letterSpacing: 1, textTransform: "uppercase" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PENALTY_TABLE.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <td style={{ padding: "8px 10px", color: "#E63946", fontWeight: 600 }}>{row.statute}</td>
              <td style={{ padding: "8px 10px", color: "#F1FAEE" }}>{row.offense}</td>
              <td style={{ padding: "8px 10px", color: "rgba(241,250,238,0.5)" }}>{row.nexus}</td>
              <td style={{ padding: "8px 10px", color: "#FFB703", fontWeight: 600 }}>{row.penalty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SB2Panel() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: "linear-gradient(135deg, rgba(154,57,70,0.15), rgba(15,15,20,0.9))", border: "1px solid rgba(230,57,70,0.3)", borderRadius: 6, padding: 16, marginBottom: 12, cursor: "pointer" }} onClick={() => setOpen(!open)}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 18 }}>⚠️</span>
        <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 15, color: "#E63946" }}>{SB2_LOOPHOLE.title}</span>
        <span style={{ marginLeft: "auto", color: "rgba(255,255,255,0.3)", transform: open ? "rotate(90deg)" : "rotate(0)", transition: "transform 0.2s" }}>›</span>
      </div>
      {open && (
        <div style={{ marginTop: 12, fontSize: 13, lineHeight: 1.7 }}>
          <p style={{ color: "rgba(241,250,238,0.7)", margin: "0 0 10px" }}>{SB2_LOOPHOLE.problem}</p>
          <div style={{ background: "rgba(230,57,70,0.08)", borderLeft: "3px solid #E63946", padding: "8px 14px", borderRadius: "0 4px 4px 0", margin: "10px 0" }}>
            <span style={{ fontSize: 12, color: "rgba(241,250,238,0.5)", fontStyle: "italic", fontFamily: "'JetBrains Mono', monospace" }}>
              “{SB2_LOOPHOLE.quote}”
            </span>
            <span style={{ fontSize: 10, color: "rgba(241,250,238,0.3)", display: "block", marginTop: 4 }}>— POST SB 2 FAQ</span>
          </div>
          <p style={{ color: "#52B788", margin: "10px 0 0", fontSize: 13 }}>{SB2_LOOPHOLE.solution}</p>
        </div>
      )}
    </div>
  );
}

export default function AccountabilityFramework() {
  const [expandedVectors, setExpandedVectors] = useState(new Set([1]));
  const [vectors, setVectors] = useState(() => {
    try {
      const saved = localStorage.getItem("af-vectors");
      return saved ? JSON.parse(saved) : VECTORS;
    } catch { return VECTORS; }
  });
  const [activeTab, setActiveTab] = useState("vectors");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleVector = (id) => {
    setExpandedVectors(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const expandAll  = () => setExpandedVectors(new Set(vectors.map(v => v.id)));
  const collapseAll = () => setExpandedVectors(new Set());

  const toggleAction = (vectorId, actionIdx) => {
    setVectors(prev => {
      const next = prev.map(v => {
        if (v.id !== vectorId) return v;
        const newActions = v.actions.map((a, i) => i === actionIdx ? { ...a, done: !a.done } : a);
        return { ...v, actions: newActions };
      });
      localStorage.setItem("af-vectors", JSON.stringify(next));
      return next;
    });
  };

  const totalActions = vectors.reduce((s, v) => s + v.actions.length, 0);
  const completedActions = vectors.reduce((s, v) => s + v.actions.filter(a => a.done).length, 0);
  const overallProgress = totalActions > 0 ? Math.round((completedActions / totalActions) * 100) : 0;
  const criticalCount = vectors.reduce((s, v) => s + v.actions.filter(a => a.priority === "CRITICAL" && !a.done).length, 0);

  const criticalItems = vectors.flatMap(v =>
    v.actions
      .map((a, idx) => ({ ...a, vectorId: v.id, actionIdx: idx, vectorTitle: v.title, vectorColor: v.color, vectorAccent: v.accent }))
      .filter(a => a.priority === "CRITICAL" && !a.done)
  );

  const filteredVectors = searchQuery
    ? vectors.filter(v =>
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.actions.some(a => a.label.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : vectors;

  const tabs = [
    { key: "vectors", label: "Attack Vectors" },
    { key: "critical", label: `Critical (${criticalCount})` },
    { key: "connections", label: "Interconnections" },
    { key: "penalties", label: "Criminal Exposure" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0F", color: "#F1FAEE", fontFamily: "'Inter', -apple-system, sans-serif", position: "relative" }}>
      {/* Subtle grid bg */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "32px 16px 60px" }}>
        {/* Header */}
        <div style={{ marginBottom: 28, textAlign: "center" }}>
          <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "rgba(241,250,238,0.3)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
            Strategic Accountability Framework
          </div>
          <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 30, fontWeight: 400, color: "#F1FAEE", margin: "0 0 6px", lineHeight: 1.2 }}>
            Newanforbi v. Derrick et al.
          </h1>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "rgba(241,250,238,0.35)" }}>
            Case No. 2:26-cv-00004-DJC-JDP — E.D. California
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 20 }}>
          <div style={{ background: "rgba(15,15,20,0.85)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "12px 14px", textAlign: "center" }}>
            <div style={{ fontSize: 24, fontFamily: "'Instrument Serif', Georgia, serif", color: "#F1FAEE" }}>{overallProgress}%</div>
            <div style={{ fontSize: 9, fontFamily: "'JetBrains Mono', monospace", color: "rgba(241,250,238,0.4)", letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>Execution</div>
            <div style={{ marginTop: 6, height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${overallProgress}%`, background: "linear-gradient(90deg, #E63946, #52B788)", borderRadius: 2, transition: "width 0.5s" }} />
            </div>
          </div>
          <div style={{ background: "rgba(15,15,20,0.85)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "12px 14px", textAlign: "center" }}>
            <div style={{ fontSize: 24, fontFamily: "'Instrument Serif', Georgia, serif", color: "#E63946" }}>{criticalCount}</div>
            <div style={{ fontSize: 9, fontFamily: "'JetBrains Mono', monospace", color: "rgba(241,250,238,0.4)", letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>Critical Pending</div>
          </div>
          <div style={{ background: "rgba(15,15,20,0.85)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "12px 14px", textAlign: "center" }}>
            <div style={{ fontSize: 24, fontFamily: "'Instrument Serif', Georgia, serif", color: "#457B9D" }}>6</div>
            <div style={{ fontSize: 9, fontFamily: "'JetBrains Mono', monospace", color: "rgba(241,250,238,0.4)", letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>Active Vectors</div>
          </div>
        </div>

        {/* SB2 Alert */}
        <SB2Panel />

        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, marginBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "10px 18px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: 0.5,
                color: activeTab === tab.key ? "#F1FAEE" : "rgba(241,250,238,0.35)",
                borderBottom: activeTab === tab.key ? "2px solid #E63946" : "2px solid transparent",
                transition: "all 0.2s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search + expand/collapse toolbar — vectors tab only */}
        {activeTab === "vectors" && (
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
            <input
              type="text"
              placeholder="Search vectors or actions…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 4, padding: "7px 12px", color: "#F1FAEE", fontSize: 12,
                fontFamily: "'JetBrains Mono', monospace", outline: "none",
              }}
            />
            <button onClick={expandAll} style={{ background: "none", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, color: "rgba(241,250,238,0.5)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", padding: "7px 12px", cursor: "pointer" }}>
              Expand All
            </button>
            <button onClick={collapseAll} style={{ background: "none", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, color: "rgba(241,250,238,0.5)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", padding: "7px 12px", cursor: "pointer" }}>
              Collapse All
            </button>
          </div>
        )}

        {/* Content */}
        {activeTab === "vectors" && (
          <div>
            {filteredVectors.length === 0 && (
              <div style={{ textAlign: "center", padding: "40px 0", color: "rgba(241,250,238,0.25)", fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>
                No vectors match "{searchQuery}"
              </div>
            )}
            {filteredVectors.map(v => (
              <VectorCard
                key={v.id}
                vector={v}
                isExpanded={expandedVectors.has(v.id)}
                onToggle={() => toggleVector(v.id)}
                onToggleAction={toggleAction}
              />
            ))}
          </div>
        )}
        {activeTab === "critical" && (
          <div>
            {criticalItems.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 0", color: "rgba(82,183,136,0.7)", fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>
                ✓ All critical actions complete
              </div>
            ) : (
              criticalItems.map((item, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: item.vectorColor, marginBottom: 4, letterSpacing: 0.5, textTransform: "uppercase" }}>
                    Vector {item.vectorId} — {item.vectorTitle}
                  </div>
                  <ActionItem
                    action={item}
                    color={item.vectorColor}
                    accent={item.vectorAccent}
                    vectorId={item.vectorId}
                    idx={item.actionIdx}
                    onToggle={toggleAction}
                  />
                </div>
              ))
            )}
          </div>
        )}
        {activeTab === "connections" && <ConnectionDiagram />}
        {activeTab === "penalties" && <PenaltyTable />}

        {/* Footer */}
        <div style={{ marginTop: 24, textAlign: "center", fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "rgba(241,250,238,0.2)", lineHeight: 1.8 }}>
          Comprehensive Strategic Framework for Legal, Administrative & Prosecutorial Accountability
          <br />Pro Se Litigation Support — Brendan Ngehsi Newanforbi
        </div>
      </div>
    </div>
  );
}
