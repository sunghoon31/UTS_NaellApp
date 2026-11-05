import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../hooks/useTheme';

export function ProfileHeader({ data, compact = false }) {
  const { typography, spacing, radius, isDark } = useTheme();

  if (!data) return null;

  const gradientColors = isDark
    ? ['#1E1B4B', '#0F172A']
    : ['#4F46E5', '#7C3AED'];

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        styles.container,
        {
          borderRadius: radius.xl,
          padding: compact ? spacing.lg : spacing.xl,
          marginBottom: spacing.lg,
        },
      ]}
      accessible={true}
      accessibilityRole="header"
      accessibilityLabel={`Profil ${data.nama}, NIM ${data.nim}, ${data.profesi}`}
    >
      <View style={styles.topRow}>
        {/* Profile Avatar */}
        <View
          style={[
            styles.avatarBorder,
            {
              borderRadius: radius.full,
              borderColor: 'rgba(255, 255, 255, 0.4)',
            },
          ]}
        >
          <Image
            source={require('../assets/profile.jpg')}
            style={[styles.avatar, { borderRadius: radius.full }]}
            accessible={true}
            accessibilityLabel={`Foto profil ${data.nama}`}
          />
        </View>

        {/* Identity Details */}
        <View style={styles.details}>
          <View style={styles.nimBadge}>
            <Text style={styles.nimText}>NIM: {data.nim}</Text>
          </View>
          <Text
            style={[
              styles.nama,
              { fontSize: compact ? typography.h2.fontSize : typography.h1.fontSize },
            ]}
            numberOfLines={2}
          >
            {data.nama}
          </Text>
          <Text style={styles.profesi} numberOfLines={2}>
            {data.profesi}
          </Text>
        </View>
      </View>

      {!compact && (
        <View style={styles.footerRow}>
          <Text style={styles.campusInfo}>
            {data.kampus} {data.fakultas ? `· Fak. ${data.fakultas}` : ''}
          </Text>
          {data.lokasi && <Text style={styles.locationInfo}>{data.lokasi}</Text>}
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 8,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarBorder: {
    padding: 3,
    borderWidth: 2,
    marginRight: 16,
  },
  avatar: {
    width: 76,
    height: 76,
    backgroundColor: '#3730A3',
  },
  details: {
    flex: 1,
  },
  nimBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 4,
  },
  nimText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  nama: {
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  profesi: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 2,
  },
  footerRow: {
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.15)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  campusInfo: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 12,
    fontWeight: '600',
  },
  locationInfo: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 11,
  },
});
