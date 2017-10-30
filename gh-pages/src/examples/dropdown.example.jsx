<div>

  <div>
    <Dropdown mainButtonText="left dropdown" renderMainButtonIcon={() =>
      <MSTeamsIcon iconWeight={MSTeamsIconWeight.light} iconType={MSTeamsIconType.downCaret} />
    } style={{ width: '100%' }}
      items={[
        { text: 'option1' },
        { text: 'option2' },
        { text: 'option3' },
        { text: 'option4' }
      ]}
    />
  </div>

  <div>
    <Dropdown menuRightAlign mainButtonText="right dropdown" label="I'm a label"
      renderMainButtonIcon={() =>
        <MSTeamsIcon iconWeight={MSTeamsIconWeight.light} iconType={MSTeamsIconType.downCaret} />
      } style={{ width: '100%' }}
      items={[
        { text: 'option1' },
        { text: 'option2' },
        { text: 'option3' },
        { text: 'option4' }
      ]}
    />
  </div>

  <div>
    <Dropdown mainButtonText="small dropdown" style={{ width: '100%' }} label="Customized item content"
      items={[
        {
          render: () => <MSTeamsIcon iconWeight={MSTeamsIconWeight.light} iconType={MSTeamsIconType.monkey} />
        }
      ]}
    />
  </div>

  <div>
    <Dropdown mainButtonText="small dropdown" style={{ width: '150px' }} label="Default icon"
      items={[
        { text: 'Lonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnng item text' }
      ]}
    />
  </div>

  <div>
    An icon only dropdown:
    <Dropdown renderMainButtonIcon={() =>
      <MSTeamsIcon iconWeight={MSTeamsIconWeight.light} iconType={MSTeamsIconType.ellipsis} />
    }
      items={[
        { text: 'Option 1' }
      ]}
    />
  </div>

</div>
