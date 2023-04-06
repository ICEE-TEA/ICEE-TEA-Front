import React, { useState } from "react";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ChooseButton from "../ChooseButton";

function Dialog() {
  const [total, setTotal] = useState(["700원", "1000원"]);

  return (
    <dialog style={{ border: "0", borderRadius: "7px", padding: "0" }}>
      <S.orderBox>
        <S.orderContent>
          <form className="deleteContent">
            <button style={{ backgroundColor: "white", border: "0" }}>
              <FontAwesomeIcon className="delete" icon={faX} />
            </button>
          </form>
          <ChooseButton title="Flavor" childs={["복숭아", "레몬", "청포도"]} />
          <ChooseButton title="Size" childs={["300ml", "500ml"]} />
          <ChooseButton title="Pay" childs={["계좌이체", "현금결제"]} />
          <div className="totalContent">
            <span>Total : 500W</span>
          </div>
          <div className="orderButton">
            <button>주문하기</button>
          </div>
        </S.orderContent>
      </S.orderBox>
    </dialog>
  );
}

export default Dialog;
