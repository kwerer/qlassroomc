import React, { useState, createRef } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Icon,
  Rail,
  Sticky,
  Segment,
} from "semantic-ui-react";
import styles from "../styles.module.css";
export default function HelpButtonWithHint() {
  let [openHelp, setOpenHelp] = useState(false);
  let [openHint, setOpenHint] = useState(false);
  let [noMoreHints, setNoMoreHints] = useState(false);
  let [hintCount, setHintCount] = useState(3);
  const contextRef = createRef();
  function handleHintClick() {
    if (hintCount > 0) {
      setHintCount(hintCount - 1);
      setOpenHint(true);
      console.log(hintCount);
    } else {
      setNoMoreHints(true);
      console.log("No more hints");
    }
  }
  return (
    <>
      <Button.Group
        vertical
        className={styles.HelpButtonWithHint}
        floated="right"
      >
        <Button
          icon
          primary
          onClick={handleHintClick}
          className={styles.HelpButtonWithHintIndivButtons}
        >
          <Icon name="lightbulb outline" color="white" attached size="big" />
        </Button>
        <div className={styles.HintCounter}>{hintCount}</div>
        <Button
          icon
          primary
          onClick={() => setOpenHelp(true)}
          className={styles.HelpButtonWithHintIndivButtons}
        >
          <Icon name="question circle" color="white" attached size="big" />
        </Button>
      </Button.Group>

      <Modal
        onClose={() => setOpenHelp(false)}
        onOpen={() => setOpenHelp(true)}
        open={openHelp}
      >
        <Modal.Header>Help is here</Modal.Header>
        <Modal.Content image>
          <Image
            size="medium"
            src="data:image/png;base64,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"
          />
          <Modal.Description>
            <Header>Guide</Header>
            <p>Click on the subject you would like to practice!</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="blue" onClick={() => setOpenHelp(false)}>
            Got it!
          </Button>
        </Modal.Actions>
      </Modal>

      <Modal
        onClose={() => setOpenHint(false)}
        onOpen={() => setOpenHint(true)}
        open={openHint}
      >
        <Modal.Header>Hint is here</Modal.Header>
        <Modal.Content image>
          <Image
            size="medium"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABg1BMVEWf3eyX2Or////6+vrxHyAOh4IIYG7wAADmpW0AAACe3Oyb3Ov6//+h4PDxGhuW2OonJyfxFRbxCw3t7dXqoWP+9vYAW2mWy9ic1+b39/el3+3W2MKQv8vo7e/82tr3np665vH96urxJyj5ubndlVkAgXrY4+fj9fn7zMz2jo7zW1vyQUG/1t70Zmb95ub6w8PyNzj1e3sJZ3KIr7l8maGUx9PX8PdnbG6tzdhcVlS15fDL7PT5rKzzVVb0c3PzS0v2h4cXFxcTExO1zcnlr4Kr1NkADR0Me3yEzdyMt8J5kplwf4NzhotYTEliZGT4pKSfs7tLWF1okpwXHyEZDAYrLi9JXWJafIRSPSzguJO0hFoxVmHHv6o9NCzAxbeqfVfzs33ruY5UQzUWKDAtHxLCiFbTonWDa1WGZEfQuJoACBvtt4nilFOYa0VoTTjVlV9YOR/s3b+MjYClrZ1muL9PoJd+tKemx7VeioqEoJrQ39BAcXtOkqA4QUMfKSxtrbw7hZOntgu5AAAPz0lEQVR4nO2d+1vbRhaGfUtkZCRsFceGNSYGh9om3GIcQkO4NJeGJA3bkiah281tN2y6SZptu91Lt236p+9cbVkaSTOjkQR5fH7oE7ALfjnnO985IyNSqVGMYhSjiDj0pF9A5DEiPP0xIjz9MSI8/TEiPP0xIjz98eETFpJ+AZFHOukXEHmMCE9/jAhPf4wIT3+MCE9/fPCE+ojw1MeI8PTHiPD0R3pEGH8YIKqVSrWq5oDlRBECNL1aqdVqvYqh7IueEELAlgJs3e5+rYI+UBZ64oSwJnXAtt7t1iq6UjgUyRJCwdW6d+6sd2vVKoaD/9Gr1aq6b5Io4frdu3e6NT01gKv2er2KF55U50k0h70arEoc1Wpvf3+/1kuxq1QvFFLT52UQE69SkLhKb78LRNireogQ0n1y9ePxTPYK+YTI90gnRog6TG9/fR2IsOIFh+jOQzoUV/ABvZBI4yfUceaq+917UIRVb28oFCZS5y8TOBjZBZw9oVEgXkJUlLB73t2418UiZD8Ry+5jGx0inMHZE+q0cRFitkp3/e4GhKt6ww1k54xsdqqCn1IR+M4xEOIxc3/93sbGxp1uzw8O0k0z6TAhFWKP/7vrkRIiwYFx5d7G/U0AV/HRXArKDjSVyx50mDB7ERMK5DAqQtxMgOA2Njc3N9a7FcMvcxCuMD3UVNiA2QXcZDxnAndEQgj2gx4Q3P3PN+/fXd+v+LKRpuJVmE5CIkSjxj29piMgNLobm59vbkC4VDCdt+xYhMTzjf1ECe/cv7eOPdz3ZeioMDnpKGD2IqpSo8b9aiIgrPr3ExTAywNlxyZcII7IXaYTUejQd+Lglh2bcIYIsctJqEdRpT7fTkR2bMIpIsQTSCgqOzYgECL6akaN0xIL8RDyuB0vIRUiZzdNR06oQzrZwmQRkuE7xVmm0RJ6jtAhAAdC5FuhoiMM1VT8CMloatR6PEnUoyEkslNGN0xItuAKV5mqJyzIeLkQYF+IXMN3QSmhtJd7R7096yKcElx/FRGqll0mU65v7a5qluUipFtwjISFkF7OjramWWYup7UcgHT4jotQhZezY17LwbDaLsIF/qM2PRShMi9nRwMTmqsuQgEhyhOql507OiWEqDUcgGAL5haiHGE0snPHrIUJV1yE/EJMCxNG4eVeUe8L0QFIh2/lhDrw8ogLcyjKqyYkLHVchDPcQhQiLJz/WDFCY6vs+/gSEqK5OO4kJMM3R1ImhAgvK6Vb2V3UoMR8AgvRnGs4CbmFWBDKoX5eHV/7WgnauXbg+6wWFmJu2UXIK8S0mA6n1RF2cJssLfk+q2FiR6y7CHmFKEhYUNdkVoib51xQ8+3ttYM6/UEgIZbq0kIUJVQnxPIcTo+1PPzpNTCLlixNW0TDKPELBiE5jgoKXZBQpRB3B26OY3mrnmmsEuHlTA1No5lt+DSLQcgnxIIgoUohtuxjNfhwqaQtNuZKuX5gRDSbsghnuAjTooQT6oRI3fwa4tvRStAVzJwtcHpnAaLGIOQTojChmBCzrV1ty/PRbezmc2WYT1vuTIpprsJxILtYMrWWm5BvC54QJuQWYrk1C+rOsrzdgGx/Gmybi/3klbTVOY18pM2Dh8ZXNHOp7ALk83xdOIf8QuyAlohepeczlslqBD1/izaY0rV6ubFF0gjNEqAsL4+Pu3PIJcS0OCG3I5LFJ6cNu0Gm3Oj/kwhxOzPwDlyYmRb5n3MNSDg+Xl9hCZHD82UIfWfvwauniw+uNBqttTnLshZn8biN/QJDrVlDnXW7RCsYAC6D8VW7NuUWYjSEV73oyvX2qmZDXCWVtj2A3kEHS8Dq8DS6YhMi8Q7686APzYPUlZGFaEuuLAYLUZcg1D9h0q20l+bAy7cnjDg6PmSBcWBrmBpsQGVtIERSptbsUAVoW+PZcXoe5Zq+g4+jZAhT0ywh1kFbMW1FlhlkJWeSvM5rOVto25khIZJNEOy6Q4Qgh+P0KMPlGMFCTMsQsoVIaXZseSVlik87M8sWThJNJDTKNhZizvYDsPCz24SqPsghwxODhKjLETKFuE1ft/tzJK9L8DWbZnurQ5YK4PQtmxCX6a4BEMuz9BgR+mADFTB4vrAjyhGyhUhL0O4NpFvgwsPmhxaJg35TKZMGisRH/ULb6ZTIV7PaMG0giRaYHRhjTdDwnZYiZAuxzPAG4ujYDdCPwNpFD+ABxlqj2x+u7TXqgSZtSGYOH16M13e328sszw8QoiQhW4idoZLMwEX2Gp29YBGizoqG1MYs/jQcWGgTsZeBrRvNE6px5kwTPHzLEjKHb6oc3GpawBr73qDBIlwrYf75JQ23Fw2mm7bMFVsZ0ChpB0ysISH6vlJdkpC9BS/TblpvzV7Dl4z6L3WJEoJXjbhNy9pBx4jUBXcHxQs+Kpkm2PJ3GMITE2JaktBj+N6hNUkm7kGYuXLf/zHmapsew5DzUDQVEIeYay/tLO6stbLBgAHDtzQhe/huWzmvgI5IlwfQFLdbMH0d1JOIEEuwx9JJDewT5SxbeEJC1CekCZlCbLkaRT9g+yGKM5fm8dTdQTocTGewZPsHNzxwKHy3YF06h2wh0hGmX5tASiSt5lxfZWTubM1ZuL8QIeKjDNyPrTWu9OFY8PH8tDShhxC3bfIDdHOd2dYKdcl6v9lqO+3Z3UW8xGtlRGVamrk2KHTT5Af0E6IegpB9HNX3M2AEnXYdzdv0THTWtuOCBZHsVbC/HGja4tp8w17orEMZr/AZvsMQsj2/7xfX5vvXk9ZsG9SKQ6gmmgTKK43+sxvEO9r8hD5CTIchZG/BJEn2wW3LPq4eaHalWnN111eAJQsssyMgxItehHoYQg8h0oOIXXdeyU5PD9EAhrnLuHA4qwH5HjCOZLzDcwsOR5jyEyLqnCSo+HCvBFsRPHHRtFznoMH6Co2tVtljBPUKTyGGI/QXomYrvyWyX+QIUXm5Nb9SZ+LBg0MxOhRenp8OR8gWomUvSRx00gm41EsAZcJrCw5HyN6C6QZlLg4+hQwAdo/ZaPg8hegsUlEdMrfgwSHwoAobJWz+7r6pCNBrC3YCCr9jiCnEFcaiv91ptzxkp4Ivm2EP38NTtwwhc/hu0P1hm/WoesBMdmbh4hXm3OYqUlFCj2vBO0MXHyLmQ3TVArvRuACF37nn4/lAeIvBdRmKb2pm4UoF0HlnwFWkwoTsLXheA2tCpx3YVsIAwtQF3tTFnUJxQrYQt3naiixfhtDpwVdGVRCqeFOGMF21yncrBXefkXgHbfg3ZfDjYdnp/G9eZwCKE4Z8dxQ/HS5MoVs5s1IoQRjmfZgChcklu2gIPa8Fq8Cz0UncrIUFKPFOdkkh8hSmr5cHBzOFEoRSQgymk5CdM5iAMoTCQgwozKkZBXRKCQWFyEWn4vZz7CKVIPTYgkXxwIMiXs4RbECp3woSvBMCM2Yu/vFuTekfLvBIoQwhrxC9egpM3d0vPh0b+1Lp/ec8AKUIed6I6S+76oPi3tjYQ5WEXimU+s2u4OHbkw5tP3rK+KJYHBs7VHhvPc8USumQfRzlh+ccoY1He0VQpvw3momZ0Nfz3XQMtzP2UZk+UkdYUEvoLURGU2F6efUrWKZfqCN0n16EIvQQIrOpsEdo4yEkHFMmRM8+I/lbsszh20YHFoQrV3zvHGd8iYTIexuWwPAGlCN0C9Epu0KAlxs1pUL0SaEk4WUmn8gIjYV4qIjQB1CS8KoTz7Yg8I2ZxsM9dUL0S6Hkb6tP2/lsXs4fxvoDdUL0A5QknOjzTc3I7XZGT93g5ptCSUI0fGdDba7GV4eqhOgLKEt4dUpMdu4wHj0+HEODW9jl3j+F0vfFCHtXeH36KP812qCM1PWbYTIZAJjYnZKNJ6/z+RdjY3+a/iY/mb8eAvGEEurTN/L5/J/HHr+cnMznm0chCAMAE7sX9BMA9vTWd8+e5yebzTdP5AmDABMi1FMwhS8Onz4/utFsNo+fSDesoBpNitC4DlJ4/JfDF/kb75qAdfIb2SQGAiZEWDgCVNcfFg//+hLw5ZtvjiUJg1OYEOFNkMIbN/9269UzUK2gTJuyzTQYMBlC41uQuOPmy7/nj44g4LGsIXIAJkKoT0/C0my+K758jXWYvyn3hU4qISpSgDj5+PDtO/iv/Bu5TsMDmChh8+2tr1/fgGX6RiqHXIDJEkIhPpfWIVeNJkzYLL59loc6vDGt6pr2iSIEQvzu8DESoszY5n0GfIIIgRBfPX8OB1NxP2S8g+3kEeab7269eg0IZVopJ1/ChPnJYvHpy7f/OBb/EtyACRM2Xx3Cowz+PwVAg7OPngDCp4fwxE34YrAAYNKEzUN49C18pigAmAgh2g4J4QuZi8EigMkQfkN7aRMIUfxicJrXKJIinP7oo++/P3r+DJ7QNF8eCl+DEhFhMoSffETiD98e3Tguil4MFgRMgFA/TwFRbKIyFRCiIGAShFeHCH/Yg2XKfw1KFDABwonrdsIff9yDZcotRGHA+AmNf144c+anf/37Z0z4wxN0Mfg3TkJxwIQIz5y5cOGzc5f+898fn/z8sMgvRAnABAh/OoPjs3Nnz8H4X5FbiDKACRCeoYRnUZx7v8c7uEkBxk9YuEAILxHCwlewTDkuBssBxk9420F4ifddfJKAsROSRgOCpPB3o/uAZ4OSBUye8Bej+iBYiKKjWpKEtJVSwveG8SsU4m9+fhECMH5CVys1oBD3fIUYBjB2wn4rpYQVAwqx6CdE3pPRk0HoaqWgOKtFXyGKLbxJEw4aDSVM4bfTeg5uoSo0UcK+WeC30wIhVlhJDA0YO6Gzlf5i4LfTFsc+ZeUwNF/8hO5WCj/7qFj8lXEsHD6BkDBexoKTEHuEUam4/z6rEj5ImFb1u2M8cdtBePY2BmP8/dlwHjFEGCOi4TSLs7x37ApHGB+j2yzYJqiH9EA3YVwdZ9BKLw3MIlK+AWE8aWSahYtPbdjqPQbGQSs9ZzOLKPmGCGNgrDrN4vYQoa6ez0E4ETHjoJVSQnsrjQLPSYgiQkhXKz3XT2Ek6fMgBIxRQXqZRXR4HoSR5ZHZSqOk8yYEipS+/4ZfUMAz/Vaq1PpECFEoh3QdYbyPGi+AEIZSTbpa6e0TQAhDFeWg0VDCyEs0zUcIQw+JqetgG3K10pNEmEYtoSDMCX4ysFlOIBbX3B0R1FCI7mH4p16AL9wbFj3qdgHd2Up/idopYKjbNDnigoPw/YdG6GqlcZhFrISuVhqHWSRDSA9pPjhCRyuNxyziJBy0UnqiH0ejiZNwwkkYi1nESeg8DY6nlcZK6GyltVi+bYyETrOIp5UmQkjNIpZWGiehyyyMWL5tfISDVnopTrOIkbDfSuM1izgJE5m74yRMZu4eEaoMZys9G48M4yN0ttK4zCIJwlg3i3T6/yG1KD0cj2KkAAAAAElFTkSuQmCC"
          />
          <Modal.Description>
            <Header>hints</Header>
            <p>Click on the subject you would like to practice!</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="blue" onClick={() => setOpenHint(false)}>
            Got it!
          </Button>
        </Modal.Actions>
      </Modal>

      <Modal
        onClose={() => setNoMoreHints(false)}
        onOpen={() => setNoMoreHints(true)}
        open={noMoreHints}
      >
        <Modal.Header>No More Hints</Modal.Header>
        <Modal.Content image>
          <Image
            size="medium"
            src="data:image/png;base64,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"
          />
          <Modal.Description>
            <Header>hints</Header>
            <p>Click on the subject you would like to practice!</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="blue" onClick={() => setNoMoreHints(false)}>
            Got it!
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}
