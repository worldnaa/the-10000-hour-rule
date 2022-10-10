//먼저 querySelector로 각각 가져오고
const startButton = document.querySelector(".start_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");

//클릭했을 때의 함수를 작성한다
function calculator() {
  const fieldValue = document.querySelector("#field_value");
  let timeValue = document.querySelector("#time_value");
  let timeValue_int = Number(timeValue.value);

  const fieldResult = document.querySelector(".field_result");
  const timeResult = document.querySelector(".time_result");

  if(fieldValue.value == "") {
    alert('입력되지 않았습니다.');
    fieldValue.focus();
    return false;
  } else if(timeValue.value == "") {
    alert('입력되지 않았습니다.');
    timeValue.focus();
    return false;
  } else if(timeValue_int > 24) {
    alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
    return false;
  }

  result.style.display = 'none';
  loading.style.display = 'flex';

  setTimeout(function(){
    loading.style.display = 'none';
    result.style.display = 'flex';
    fieldResult.innerText = fieldValue.value;
    timeResult.innerText = parseInt((10000 / timeValue_int), 10); //계산한 결과를 소수점 빼고 10진수로 바꿔 출력
  }, 1800); //1.8초 뒤에 출력
}

function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

//모달의 바깥을 클릭해도 모달이 닫히게 하기
window.onclick = function(event) {
  if(event.target == modal) { //모달 밖을 클릭했을 때
    closeModal();             //모달 닫는 함수 실행
  }
}

function copyUrl() {
  let url = window.location.href;
  let tmp = document.createElement('input');

  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand("copy");
  document.body.removeChild(tmp);

  alert("URL이 복사되었습니다");
}

//querySelector로 가져온 것을 클릭했을 때의 이벤트를 등록한다
shareButton.addEventListener('click', copyUrl);
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculator);