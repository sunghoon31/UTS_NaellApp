import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export function Card({
  children,
  onPress,
  style,
  contentStyle,
  accessible = true,
  accessibilityRole,
  accessibilityLabel,
  accessibilityHint,
}) {
  const { colors, radius, spacing } = useTheme();

  const containerStyles = [
    styles.card,
    {
      backgroundColor: colors.surface,
      borderColor: colors.cardBorder,
      borderRadius: radius.lg,
      padding: spacing.lg,
    },
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        style={containerStyles}
        onPress={onPress}
        activeOpacity={0.85}
        accessible={accessible}
        accessibilityRole={accessibilityRole || 'button'}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
      >
        <View style={contentStyle}>{children}</View>
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={containerStyles}
      accessible={accessible}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
    >
      <View style={contentStyle}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
});

