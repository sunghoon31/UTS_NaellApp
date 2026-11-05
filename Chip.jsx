import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';

export function Chip({
  label,
  selected = false,
  icon,
  onPress,
  style,
  textStyle,
}) {
  const { colors, radius, spacing, typography } = useTheme();

  const isInteractive = typeof onPress === 'function';

  const content = (
    <View style={styles.innerRow}>
      {icon && (
        <Ionicons
          name={icon}
          size={14}
          color={selected ? '#FFFFFF' : colors.textMuted}
          style={{ marginRight: 6 }}
        />
      )}
      <Text
        style={[
          styles.text,
          {
            color: selected ? '#FFFFFF' : colors.text,
            fontSize: typography.captionBold.fontSize,
          },
          textStyle,
        ]}
      >
        {label}
      </Text>
    </View>
  );

  const containerStyle = [
    styles.chip,
    {
      backgroundColor: selected ? colors.primary : colors.surfaceMuted,
      borderColor: selected ? colors.primary : colors.border,
      borderRadius: radius.full,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
    },
    style,
  ];

  if (isInteractive) {
    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={onPress}
        activeOpacity={0.8}
        accessible={true}
        accessibilityRole="button"
        accessibilityState={{ selected }}
        accessibilityLabel={`Filter ${label}${selected ? ', terpilih' : ''}`}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return <View style={containerStyle}>{content}</View>;
}

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    marginRight: 8,
    marginVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 34,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
  },
});

