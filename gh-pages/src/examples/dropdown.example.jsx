<div>

  <div>
    <Dropdown mainButtonText="left dropdown" renderMainButtonIcon={() =>
      <MSTeamsIcon iconWeight={MSTeamsIconWeight.light} iconType={MSTeamsIconType.downCaret} />
    } style={{ width: '100%' }}
    >
      <DropdownItem>option1</DropdownItem>
      <DropdownItem>option2</DropdownItem>
      <DropdownItem>option3</DropdownItem>
      <DropdownItem>option4</DropdownItem>
    </Dropdown>
  </div>

  <div>
    <Dropdown menuRightAlign mainButtonText="right dropdown" label="I'm a label"
      renderMainButtonIcon={() =>
        <MSTeamsIcon iconWeight={MSTeamsIconWeight.light} iconType={MSTeamsIconType.downCaret} />
      } style={{ width: '100%' }}
    >
      <DropdownItem>option1</DropdownItem>
      <DropdownItem>option2</DropdownItem>
      <DropdownItem>option3</DropdownItem>
      <DropdownItem>option4</DropdownItem>
    </Dropdown>
  </div>

  <div>
    <Dropdown mainButtonText="small dropdown" style={{ width: '150px' }} label="Default icon"  >
      <DropdownItem>Lonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnng item text</DropdownItem>
    </Dropdown>
  </div>

  <div>
    An icon only dropdown:
    <Dropdown renderMainButtonIcon={() =>
      <MSTeamsIcon iconWeight={MSTeamsIconWeight.light} iconType={MSTeamsIconType.ellipsis} />
    }>
      <DropdownItem>Option 1</DropdownItem>
    </Dropdown>
  </div>

</div>
