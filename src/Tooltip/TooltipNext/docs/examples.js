export const simple = `
<Tooltip content="Enter your postal code">
  <TextButton skin="dark">Hover me</TextButton>
</Tooltip>
`;

export const basic = `
<Layout cols={1} justifyItems="center">
  <TooltipNext appendTo="window" content="Enter your postal code, so postman can easier send you a mail.">
  <TextButton skin="dark">Hover me</TextButton>
  </TooltipNext>
</Layout>
`;

export const placements = `


class PositionExample extends React.Component {

  constructor() {
    super();
    this.state = { position: 0 };
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
      position: (this.state.position + 1) % this.VALID_PLACEMENTS.length,
    });
  };

  render() {
    const placement = this.VALID_PLACEMENTS[this.state.position];
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
