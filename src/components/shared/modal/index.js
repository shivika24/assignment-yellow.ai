/**
 * OrangeButton modal component
 * @returns
 */
function Modal({ children }) {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      {...children}
    </div>
  );
}
