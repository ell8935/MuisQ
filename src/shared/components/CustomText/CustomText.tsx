import { CustomTextInterface } from "../../constants/types";
import CustomTextStyled from "./CustomTextStyled";

const CustomText = ({ label, size }: CustomTextInterface) => {
  console.log(size);

  return (
    <CustomTextStyled size={size}>
      <span>{label}</span>
    </CustomTextStyled>
  );
};
export default CustomText;

// style={[styles.normal, styles[type], style, light && styles.light]}
// const styles = StyleSheet.create({
//   normal: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: colors.darkGrey,
//     fontFamily: 'Rubik-Medium',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   subTitle: {
//     fontSize: 20,
//   },
//   small: {
//     fontSize: 14,
//   },

//   paragraph: {fontSize: 20, lineHeight: 30},
//   light: {color: colors.darkWhite},
//   error: {color: colors.alertRed},
// });
