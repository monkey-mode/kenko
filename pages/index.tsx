import { Card, Grid, Text, Button } from "@nextui-org/react";
import type { NextPage } from "next";

type Props = {
  text: string;
};

const Home: NextPage = () => {
  const MockItem = ({ text }: Props) => {
    return (
      <Card css={{ h: "$24", $$cardColor: "$colors$primary" }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
          <Button color="gradient" auto>
            Gradient
          </Button>
        </Card.Body>
      </Card>
    );
  };
  return (
    <Grid.Container gap={1} justify="center">
      <Grid xs={0} md={3}>
        <MockItem text="1 of 3" />
      </Grid>
      <Grid xs={12} md={6}>
        <MockItem text="2 of 3" />
      </Grid>
      <Grid xs={0} md={3}>
        <MockItem text="3 of 3" />
      </Grid>
    </Grid.Container>
  );
};

export default Home;
