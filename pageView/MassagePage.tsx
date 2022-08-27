
function MassagePage() {
  return (
    // <Container
    //   fluid
    //   direction="column"
    //   justify="center"
    //   alignContent="center"
    //   alignItems="center"
    //   css={{
    //     width: "100%",
    //     height: "fit-content",
    //     display: "flex",
    //     padding: 0,
    //   }}
    // >
    //   <Text h1 transform="uppercase" css={{ letterSpacing: "0.2rem" }}>
    //     massage menu
    //   </Text>
    //   <Grid.Container
    //     justify="center"
    //     alignContent="stretch"
    //     gap={1}
    //     css={{ p: "$0" }}
    //   >
    //     {servicesList[2].subService.map((service, index) => {
    //       return (
    //         <Grid
    //           key={index}
    //           justify="center"
    //           alignItems="center"
    //           xs={12}
    //           sm={4}
    //           md={3}
    //         >
    //           <Card css={{ w: "400px", h: "500px" }}>
    //             <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    //               <Col>
    //                 <Text
    //                   size={12}
    //                   weight="bold"
    //                   transform="uppercase"
    //                   color="black"
    //                 >
    //                   {service.th}
    //                 </Text>
    //                 <Text h3 color="black">
    //                   {service.en}
    //                 </Text>
    //               </Col>
    //             </Card.Header>
    //             <Card.Body css={{ p: 0 }}>
    //               <Card.Image
    //                 src={service.img}
    //                 objectFit="cover"
    //                 width="100%"
    //                 height="100%"
    //                 alt="Relaxing app background"
    //               />
    //             </Card.Body>
    //             <Card.Footer
    //               css={{
    //                 background: "$colors$secondary",
    //               }}
    //             >
    //               <Row>
    //                 <Col>
    //                   <Table
    //                     aria-label="Example table with dynamic content"
    //                     css={{
    //                       height: "auto",
    //                       minWidth: "100%",
    //                     }}
    //                   >
    //                     <Table.Header columns={columns}>
    //                       {(column) => (
    //                         <Table.Column key={column.key}>
    //                           {column.label}
    //                         </Table.Column>
    //                       )}
    //                     </Table.Header>
    //                     <Table.Body>
    //                       {service.price.map((row, index) => {
    //                         return (
    //                           <Table.Row key={index}>
    //                             <Table.Cell
    //                               css={{
    //                                 color: "$colors$gradient",
    //                                 stroke: "$black",
    //                                 strokeWidth: "2px",
    //                               }}
    //                             >
    //                               {row.period}
    //                             </Table.Cell>
    //                             <Table.Cell>{row.price}</Table.Cell>
    //                           </Table.Row>
    //                         );
    //                       })}
    //                     </Table.Body>
    //                   </Table>
    //                 </Col>
    //               </Row>
    //             </Card.Footer>
    //           </Card>
    //         </Grid>
    //       );
    //     })}
    //   </Grid.Container>
    // </Container>
    <></>
  );
}

export default MassagePage;
