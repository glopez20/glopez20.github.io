const $form = $("form#process-form");
const $totalLabel = $("span#total");
const $process = $("div.process");

const $processList = $("div#process-list");
const $processEmptyLabel = $("p#process-empty");

const $maxProcessesLabel = $("span#max-processes");

const $newProcessButton = $("button#new-process");
const $executeProcessesButton = $("button#execute-processes");

const MAX_PROCESSES = 10;
const BACKGROUND_COLOR_CLASSES = [
  "bg-red-600",
  "bg-orange-600",
  "bg-pink-600",
  "bg-gray-600",
  "bg-blue-600",
  "bg-teal-600",
  "bg-yellow-600",
  "bg-indigo-600",
  "bg-purple-600",
  "bg-green-600",
];

let processes = new LinkedList();

$maxProcessesLabel.text(MAX_PROCESSES);

$form.on("submit", function (e) {
  e.preventDefault();

  const data = parseFormData($form);

  const $selectedProcess = $(".process[data-selected=true]");

  if ($selectedProcess.length) {
    return;
  }

  const exists = processes.search(data.id);

  if (exists) {
    alert(`Ya existe un proceso con el identificador proveído (${data.id}).`);
    return;
  }

  const process = new Process(
    data.id,
    data.nombre,
    data.prioridad,
    data.tiempo_ejecucion,
  );

  processes.insert(process);

  const total = processes.count();

  $processEmptyLabel.hide();

  $processList.addClass("w-fit");

  const backgroundColorClass = BACKGROUND_COLOR_CLASSES[total - 1];

  const $processElement = $process
    .clone()
    .removeAttr("id")
    .attr("data-process", data.id)
    .removeClass("invisible")
    .addClass(backgroundColorClass);

  $processElement.find("span").text(`#${data.id}`);

  $processList.append($processElement);

  $totalLabel.text(total);

  if (total === MAX_PROCESSES) {
    $newProcessButton.prop("disabled", true);
  }

  toggleDialog();

  $executeProcessesButton.removeClass("opacity-0");

  this.reset();

  $processElement.on("click", function () {
    $selectedProcess
      .removeClass("ring-offset-2 ring-2")
      .attr("data-selected", false);

    $(this)
      .attr("data-selected", !$(this).data("selected"))
      .toggleClass("ring-offset-2 ring-2");
  });
});
