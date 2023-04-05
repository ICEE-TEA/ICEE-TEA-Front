import React from "react";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Order() {
  return (
    <S.backCenter>
      <S.WhiteBox>
        <S.orderBox>
          <S.orderContent>
            <div className="deleteContent">
              <FontAwesomeIcon className="delete" icon={faX} />
            </div>
            <div className="flavorContent">
              <span>Flavor</span>
              <div className="fruitFlavor">
                <div className="peach fruit">복숭아</div>
                <div className="lemon fruit">레몬</div>
                <div className="greenGrape fruit">청포도</div>
              </div>
            </div>
            asd
          </S.orderContent>
        </S.orderBox>
      </S.WhiteBox>
    </S.backCenter>
  );
}

export default Order;
