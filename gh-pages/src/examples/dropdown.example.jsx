<div>

  <div>
    <Dropdown mainButtonText="left dropdown" renderMainButtonIcon={() =>
      <MSTeamsIcon iconWeight={MSTeamsIconWeight.light} iconType={MSTeamsIconType.downCaret} />
    } style={{ width: '100%' }}
      items={[
        { text: 'option1', onClick: () => console.log('hello') },
        { text: 'option2', onClick: () => console.log('hello') },
        { text: 'option3', onClick: () => console.log('hello') },
        { text: 'option4', onClick: () => console.log('hello') }
      ]}
    />
  </div>

  <div>
    <Dropdown menuRightAlign mainButtonText="right dropdown" label="I'm a label"
      renderMainButtonIcon={() =>
        <MSTeamsIcon iconWeight={MSTeamsIconWeight.light} iconType={MSTeamsIconType.downCaret} />
      } style={{ width: '100%' }}
      items={[
        { text: 'option1', onClick: () => alert('hello') },
        { text: 'option2', onClick: () => alert('hello') },
        { text: 'option3', onClick: () => alert('hello') },
        { text: 'option4', onClick: () => alert('hello') }
      ]}
    />
  </div>

  <div>
    <Dropdown mainButtonText="small dropdown" style={{ width: '100%' }} label="Customized item content"
      items={[
        {
          render: () => <MSTeamsIcon iconWeight={MSTeamsIconWeight.light} iconType={MSTeamsIconType.monkey} />,
          onClick: () => alert('hello'),
        }
      ]}
    />
  </div>

  <div>
    <Dropdown mainButtonText="small dropdown" style={{ width: '150px' }} label="Default icon"
      items={[
        {
          text: 'Lonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnng item text',
          onClick: () => alert('hello'),
        }
      ]}
    />
  </div>

  <div>
    An icon only dropdown:
    <Dropdown renderMainButtonIcon={() =>
      <MSTeamsIcon iconWeight={MSTeamsIconWeight.light} iconType={MSTeamsIconType.ellipsis} />
    }
      items={[
        { text: 'Option 1', onClick: () => alert('hello') }
      ]}
    />
  </div>

</div>
