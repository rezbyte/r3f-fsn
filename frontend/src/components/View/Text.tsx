import TextSprite from "@seregpie/three.text-sprite";

interface textProps {
  text: string;
}

export default function Text(props: textProps & JSX.IntrinsicElements["mesh"]) {
  const sprite = new TextSprite({
    alignment: "centre",
    color: "#000000",
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: 0.5,
    fontStyle: undefined,
    text: props.text,
  });
  return <primitive {...props} object={sprite} />;
}
