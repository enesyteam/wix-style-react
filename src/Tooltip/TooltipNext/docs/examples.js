export const simple = `
<Tooltip content="Enter your postal code">
  <TextButton skin="dark">Hover me</TextButton>
</Tooltip>
`;

export const basic = `
<Layout cols={2} justifyItems="center">
  <TooltipNext appendTo="window" content="Enter your postal code, so postman can easier send you a mail.">
    <TextButton>Hover me (TextButton)</TextButton>
  </TooltipNext>
  <TooltipNext appendTo="window" content="Enter your postal code, so postman can easier send you a mail.">
    <Text>Hover me (Text)</Text>
  </TooltipNext>
</Layout>
`;

export const placements = `
class PlacementExample extends React.Component {

  constructor() {
    super();
    this.state = { placement: 0 };
    this.changeDirection = this.changeDirection.bind(this);
    this.VALID_PLACEMENTS = [
      'top',
      'right',
      'bottom',
      'left'
    ]
  }

  changeDirection() {
    this.setState({
      placement: (this.state.placement + 1) % this.VALID_PLACEMENTS.length,
    });
  };

  render() {
    const placement = this.VALID_PLACEMENTS[this.state.placement];
    return (
      <Layout cols={1} justifyItems="center">
        <TooltipNext content={placement} placement={placement} appendTo="window">
          <TextButton onClick={this.changeDirection}>Click me</TextButton>
        </TooltipNext>
      </Layout>
    );
  }
}
`;

export const delay = `
<Layout cols={1} justifyItems="center">
  <TooltipNext enterDelay={300} exitDelay={300} appendTo="window" content="Enter your postal code, so postman can easier send you a mail.">
    <Text>Hover me</Text>
  </TooltipNext>
</Layout>
`;

export const size = `
<Layout cols={2} justifyItems="center">
  <TooltipNext size="small" appendTo="window" content="Enter your postal code, so postman can easier send you a mail.">
    <Text>small</Text>
  </TooltipNext>
  <TooltipNext size="medium" appendTo="window" content="Enter your postal code, so postman can easier send you a mail.">
    <Text>medium (default)</Text>
  </TooltipNext>
</Layout>
`;
