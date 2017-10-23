<div>
  {Object.keys(MSTeamsIconWeight).map((weightTypeKey) => {
    return <div key={weightTypeKey}>
      <h4>{`MSTeamsIconWeight.${weightTypeKey}`}</h4>
      {Object.keys(MSTeamsIconType).map((iconTypeKey) => {
        return <div key={iconTypeKey}>
          <MSTeamsIcon iconWeight={MSTeamsIconWeight[weightTypeKey]} iconType={MSTeamsIconType[iconTypeKey]}/>
          {`    MSTeamsIconType.${iconTypeKey}`}
        </div>;
      })}
      </div>;
  })}
</div>
