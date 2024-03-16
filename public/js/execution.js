const MILLISECONDS_IN_A_SECOND = 1000;

const $executeButton = $("button#execute-processes");

const $execution = $("div#execution");
const $processId = $execution.find("span#process-id");
const $processName = $execution.find("span#process-name");
const $processPriority = $execution.find("span#process-priority");
const $processExecutionTime = $execution.find("span#process-estimated-time");
const $processLeftTime = $execution.find("span#process-left-time");

$executeButton.on("click", async function () {
  let activeProcess = processes.get_next_by_priority();

  while (activeProcess) {
    const process = activeProcess.value;

    const processId = process.get_id();
    const processName = process.get_nombre();
    const processPriority = process.get_prioridad();
    const processExecutionTime = process.get_tiempo_ejecucion();

    const $process = $(`div[data-process=${processId}]`);

    $processId.text(processId);
    $processName.text(processName);
    $processPriority.text(processPriority);
    $processExecutionTime.text(`${processExecutionTime} segundo(s)`);

    $process.find("svg").addClass("animate-spin");

    let processLeftTime = processExecutionTime;

    $processLeftTime.text(`${processLeftTime} segundo(s)`);

    const leftTimeInterval = setInterval(() => {
      processLeftTime--;

      $processLeftTime.text(`${processLeftTime} segundo(s)`);

      if (processLeftTime === 0) {
        clearInterval(leftTimeInterval);
      }
    }, MILLISECONDS_IN_A_SECOND);

    await sleep(processExecutionTime);

    processes.delete(processId);

    const total = processes.count();

    $totalLabel.text(total);

    $process.remove();

    activeProcess = processes.get_next_by_priority();
  }

  $processEmptyLabel.show();
  $processList.removeClass("w-fit");

  $processId.text("-");
  $processName.text("-");
  $processPriority.text("-");
  $processExecutionTime.text("-");
  $processLeftTime.text("-");
});

function sleep(execution_time) {
  const timeout = execution_time * MILLISECONDS_IN_A_SECOND;
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, timeout),
  );
}
