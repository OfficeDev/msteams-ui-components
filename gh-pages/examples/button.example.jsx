<Surface style={{padding: '10px'}}>
  <h4>Primary</h4>
  <PrimaryButton>Enabled</PrimaryButton>
  <PrimaryButton disabled>Disabled</PrimaryButton>
  <h4>Secondary</h4>
  <SecondaryButton>Enabled</SecondaryButton>
  <SecondaryButton disabled>Disabled</SecondaryButton>
  <h4>Compound</h4>
  <CompoundButton primaryText="No Icon" secondaryText="Secondary Text" />
  <CompoundButton icon={() => <div style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>X</div>} primaryText="Enabled" secondaryText="Secondary Text" />
  <CompoundButton icon={() => <div style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>X</div>} primaryText="Disabled" secondaryText="Secondary Text" disabled/>
</Surface>
