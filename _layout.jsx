import React from 'react';
import { Tabs } from 'expo-router';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';

export default function TabLayout() {
  const { colors, isDark, toggleTheme, typography } = useTheme();

  const renderHeaderRight = () => (
    <TouchableOpacity
      onPress={toggleTheme}
      style={[
        styles.themeToggle,
        {
          backgroundColor: colors.surfaceMuted,
          borderColor: colors.border,
        },
      ]}
      activeOpacity={0.7}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Ganti tema, saat ini tema ${isDark ? 'gelap' : 'terang'}`}
      accessibilityHint="Ketuk untuk beralih mode gelap dan terang"
    >
      <Ionicons
        name={isDark ? 'sunny' : 'moon'}
        size={18}
        color={isDark ? '#FBBF24' : colors.primary}
      />
    </TouchableOpacity>
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.background,
          borderBottomColor: colors.border,
          borderBottomWidth: 1,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          color: colors.text,
          fontSize: typography.h3.fontSize,
          fontWeight: '700',
        },
        headerRight: renderHeaderRight,
        headerRightContainerStyle: {
          paddingRight: 16,
        },
        tabBarStyle: {
          backgroundColor: colors.tabBar,
          borderTopColor: colors.tabBarBorder,
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarActiveTintColor: colors.tabBarActive,
        tabBarInactiveTintColor: colors.tabBarInactive,
        tabBarLabelStyle: {
          fontSize: 10.5,
          fontWeight: '600',
        },
      }}
    >
      {/* 1. Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          headerTitle: 'Personal CV',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />

      {/* 2. About */}
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarLabel: 'About',
          headerTitle: 'Tentang Saya',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />

      {/* 3. Skills */}
      <Tabs.Screen
        name="skills"
        options={{
          title: 'Skills',
          tabBarLabel: 'Skills',
          headerTitle: 'Keahlian & Kompetensi',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'flash' : 'flash-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />

      {/* 4. Portfolio */}
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
          tabBarLabel: 'Portfolio',
          headerTitle: 'Galeri Portofolio',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'briefcase' : 'briefcase-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />

      {/* 5. My Score */}
      <Tabs.Screen
        name="score"
        options={{
          title: 'My Score',
          tabBarLabel: 'My Score',
          headerTitle: 'Capaian Akademik',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'ribbon' : 'ribbon-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />

      {/* 6. Contact */}
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarLabel: 'Contact',
          headerTitle: 'Hubungi Saya',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'mail' : 'mail-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  themeToggle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});
