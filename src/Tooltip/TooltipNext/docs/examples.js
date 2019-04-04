export const simple = `
<Tooltip upgrade content="Enter your postal code">
  <TextButton skin="dark">Hover me</TextButton>
</Tooltip>
`;

export const basic = `
<Layout cols={2} justifyItems="center">
  <Tooltip upgrade appendTo="window" content="Enter your postal code, so postman can easier send you a mail.">
    <TextButton>Hover me (TextButton)</TextButton>
  </Tooltip>
  <Tooltip upgrade appendTo="window" content="Enter your postal code, so postman can easier send you a mail.">
    <Text>Hover me (Text)</Text>
  </Tooltip>
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
        <Tooltip upgrade content={placement} placement={placement} appendTo="window">
          <TextButton onClick={this.changeDirection}>Click me</TextButton>
        </Tooltip>
      </Layout>
    );
  }
}
`;

export const delay = `
<Layout cols={1} justifyItems="center">
  <Tooltip upgrade enterDelay={300} exitDelay={300} appendTo="window" content="Enter your postal code, so postman can easier send you a mail.">
    <Text>Hover me</Text>
  </Tooltip>
</Layout>
`;

export const size = `
<Layout cols={2} justifyItems="center">
  <Tooltip upgrade size="small" appendTo="window" content="Enter your postal code, so postman can easier send you a mail.">
    <Text>small</Text>
  </Tooltip>
  <Tooltip upgrade size="medium" appendTo="window" content="Enter your postal code, so postman can easier send you a mail.">
    <Text>medium (default)</Text>
  </Tooltip>
</Layout>
`;

export const flip = `
class TooltipFlip extends React.Component {

  render() {
    return ( 
    <div
    style={{
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid black',
    }}
    >
      <div
        data-hook="story-popover-fixed-disabled"
        style={{
          overflow: 'auto',
          height: 120,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ padding: '70px 25px 100px' }}>
          <Tooltip upgrade appendTo="scrollParent" content="I am here">
            <TextButton size="small">
               Focus me
            </TextButton>
          </Tooltip>
        </div>
      </div>
    </div>
    )
  }
}
`;

export const flipnot = `
class TooltipFlip extends React.Component {

  render() {
    return ( 
    <div
    style={{
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid black',
    }}
    >
      <div
        data-hook="story-popover-fixed-disabled"
        style={{
          overflow: 'auto',
          height: 120,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ padding: '70px 25px 100px' }}>
          <Tooltip upgrade flip={false} appendTo="scrollParent" content="I am here">
            <TextButton size="small">
               Focus me
            </TextButton>
          </Tooltip>
        </div>
      </div>
    </div>
    )
  }
}
`;

export const fixed = `
class TooltipFixed extends React.Component {

  render() {
    return ( 
    <div
    style={{
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid black',
    }}
    >
      <div
        data-hook="story-popover-fixed-disabled"
        style={{
          overflow: 'auto',
          height: 120,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ padding: '70px 25px 100px' }}>
          <Tooltip upgrade fixed appendTo="scrollParent" content="I am here">
            <TextButton size="small">
               Focus me
            </TextButton>
          </Tooltip>
        </div>
      </div>
    </div>
    )
  }
}
`;

export const parent = `
<Layout cols={1} justifyItems="center">
  <Tooltip upgrade appendTo="parent" content="Enter your postal code, so postman can easier send you a mail.">
    <TextButton>Parent</TextButton>
  </Tooltip>
</Layout>
`;

export const window = `
<Layout cols={1} justifyItems="center">
  <Tooltip upgrade appendTo="window" content="Enter your postal code, so postman can easier send you a mail.">
    <TextButton>Window</TextButton>
  </Tooltip>
</Layout>
`;

export const viewport = `
<Layout cols={1} justifyItems="center">
  <Tooltip upgrade appendTo="viewport" content="Enter your postal code, so postman can easier send you a mail.">
    <TextButton>Viewport</TextButton>
  </Tooltip>
</Layout>
`;

export const scrollParent = `
class TooltipFixed extends React.Component {

  render() {
    return ( 
    <div
    style={{
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid black',
    }}
    >
      <div
        data-hook="story-popover-fixed-disabled"
        style={{
          overflow: 'auto',
          height: 50,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ padding: '15px 25px 20px' }}>
          <Tooltip upgrade fixed appendTo="scrollParent" content="I am here">
            <TextButton size="small">
               ScrollParent
            </TextButton>
          </Tooltip>
        </div>
      </div>
    </div>
    )
  }
}
`;
