import React, { useState } from "react";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ChooseButton from "../ChooseButton";
import { useNavigate } from "react-router";

function Dialog() {
  const [total, setTotal] = useState(["700원", "1000원"]);
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();

  const onClickConfirm = (page) => {
    navigate(page);
  };

  return (
    <dialog
      style={{
        border: "0",
        borderRadius: "7px",
        padding: "0",
      }}
    >
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
            <span>asd</span>
          </div>
          <div className="orderButton">
            <button
              onClick={() => {
                // setConfirm(window.confirm("주문을 하시겠습니까?"));
                // console.log(confirm);
                // if (confirm === false) {
                //   onClickConfirm("/payment");
                // }
                if (window.confirm("주문을 하시겠습니까?")) {
                  setConfirm(true);
                  console.log(confirm);
                  alert("주문이 완료되었습니다!");
                  onClickConfirm("/payment");
                } else {
                  setConfirm(false);
                  console.log(confirm);
                }
              }}
            >
              주문하기
            </button>
          </div>
        </S.orderContent>
      </S.orderBox>
    </dialog>
  );
}

export default Dialog;
