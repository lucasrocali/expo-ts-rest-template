import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

//for screens in RootStackParamList
export const StackScreen = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray.c25};
`;

//for screens inside MainTabParamList
export const TabScreen = styled(SafeAreaView).attrs({
  edges: ['right', 'left', 'top'],
})`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray.c25};
`;
