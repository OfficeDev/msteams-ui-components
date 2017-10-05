<Surface style={{padding: '10px'}}>
  {Object.keys(MSTeamsIconWeight).map((weightTypeKey) => {
    return <div>
      <h4>{`MSTeamsIconWeight.${weightTypeKey}`}</h4>
      {Object.keys(MSTeamsIconType).map((iconTypeKey) => {
        return <div>
          <MSTeamsIcon iconWeight={MSTeamsIconWeight[weightTypeKey]} iconType={MSTeamsIconType[iconTypeKey]}/>
          {`    MSTeamsIconType.${iconTypeKey}`}
        </div>;
      })}
      </div>;
  })}
</Surface>
