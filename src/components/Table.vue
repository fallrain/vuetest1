<template>
  <div class="test-table">
    <table>
      <thead>
      <tr>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in items">
        <td v-text="item.name"></td>
        <td v-text="item.sex">男</td>
        <td v-text="item.age">17</td>
        <td><a href="javascript:;" @click="delRd(index);">删除</a></td>
      </tr>
      </tbody>
      <tbody>
      <tr>
        <td><input type="text" v-model="beAddItem.name" placeholder="姓名"></td>
        <td><input type="text" v-model="beAddItem.sex" placeholder="性别"></td>
        <td><input type="text" v-model="beAddItem.age" placeholder="年龄"></td>
        <td>
          <button class="btn suc-btn" type="button" @click="addRd">添加</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="btn-gp">
    </div>
  </div>
</template>

<script>
  export default {
    name : 'Table',
    data () {
      return {
        items : [
          {
            name : '张三',
            age : 17,
            sex : '男'
          },
          {
            name : '李四',
            age : 22,
            sex : '男'
          },
          {
            name : '王五',
            age : 11,
            sex : '女'
          },
        ],
        beAddItem : {
          name : '',
          age : '',
          sex : ''
        }
      }
    },
    methods : {
      delRd(index){
        this.items.splice(index, 1);
      },
      addRd(){
        var beAddItem = this.beAddItem;
        for(var p in beAddItem){
          if(beAddItem[p].replace(/^\s*|\s$/g, '') === ''){
            alert('请填写完整');
            return;
          }
        }
        this.items.push(Object.assign({}, beAddItem));
        this.beAddItem={
          name : '',
          age : '',
          sex : ''
        }
      }
    }
  }
</script>

<style scoped>
  @import '../css/table.css';
</style>
