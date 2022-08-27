import { Text } from "@nextui-org/react";

type Props = {
  text: string;
};

function MenuHeader({ text }: Props) {
  return (
    <Text
      h4
      transform="uppercase"
      weight={"extrabold"}
      css={{
        textAlign: "center",
        letterSpacing: "0.2rem",
        fontFamily: "$primary",
        color: "$black",
        background: "$primaryGold",
        borderRadius: "$xl",
      }}
    >
      {text}
    </Text>
  );
}

export default MenuHeader;
