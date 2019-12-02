<template>
  <div>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航四三</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="4-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="4-4">
        <template slot="title">选项4</template>
        <el-menu-item index="4-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
  </div>
</template>