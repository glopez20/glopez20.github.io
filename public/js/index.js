const $form = $("form#process-form");
const $total = $("span#total");
const $process = $("div#process");

const $processList = $("div#process-list");
const $processEmpty = $("p#process-empty");

$form.on("submit", function (e) {
  e.preventDefault();

  const currentTotal = parseInt($total.text());
  $total.text(currentTotal + 1);

  $processEmpty.remove();

  const $newProcess = $process.clone().removeClass("invisible");
  $processList.append($newProcess);

  toggleDialog();
});
