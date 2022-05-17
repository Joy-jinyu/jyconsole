// interface NumberItemProps {
//   value: number; // 展示的数值
// }

// const NumberItem = ({ value }: NumberItemProps) => {
//   const showNumber = useMemo(() => {
//     return Number(value) || 0;
//   }, [value]);

//   return (
//     <div className="number-item">
//       <div
//         className="number-item__scroll"
//         style={{
//           animation: `margin-top-${showNumber} ${
//             showNumber * 0.2
//           }s linear 1 forwards`,
//         }}
//       >
//         {new Array(10).fill(undefined).map((_, index) => (
//           <span key={`number_item_${index}`}>{index}</span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NumberItem;
