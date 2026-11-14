import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, color, size, onPress }) {
  return (
    <Pressable
      className="m-2 rounded-[20px] active:opacity-70"
      onPress={onPress}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
}

export default IconButton;
