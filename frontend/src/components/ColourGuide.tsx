import "../styles/ColourGuide.css";
export default function ColourGuide() {
  return (
    <div className="colour-guide">
      <pre className="colour-guide-ages">Ages:</pre>
      <pre className="colour-guide-1-week">1 wk</pre>
      <pre className="colour-guide-2-weeks">2 wk</pre>
      <pre className="colour-guide-1-month">1 mo</pre>
      <pre className="colour-guide-3-months">3 mo</pre>
      <pre className="colour-guide-6-months">6 mo</pre>
      <pre className="colour-guide-1-year">1 yr</pre>
      <pre className="colour-guide-more-than-1-year">&gt; 1 yr</pre>
      <div className="vertical-rule" />
      <pre className="colour-guide-monitored">Monitored</pre>
    </div>
  );
}
